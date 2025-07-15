package main

import (
	"fmt"
	"io"
	"os"
	"strings"

	"github.com/charmbracelet/bubbles/list"
	tea "github.com/charmbracelet/bubbletea"
	"github.com/charmbracelet/lipgloss"
)

type item struct {
	title    string
	desc     string
	selected bool
	multi    bool
}

func (i item) Title() string       { return i.title }
func (i item) Description() string { return i.desc }
func (i item) FilterValue() string { return i.title }

type stage int

const (
	stageBackend stage = iota
	stageAI
	stageDatabase
	stageFrontend
	stageSummary
)

type model struct {
	stage       stage
	list        list.Model
	selections  map[stage][]item
	done        bool
	allowMulti  bool
	currentOpts []item
}

func newList(items []item, title string, multi bool) list.Model {
	const width, height = 80, 12
	l := list.New(toListItems(items), compactDelegate{}, width, height)
	l.Title = title
	l.SetShowStatusBar(false)
	l.SetFilteringEnabled(false)
	l.SetShowHelp(false)
	return l
}

func toListItems(items []item) []list.Item {
	var l []list.Item
	for _, i := range items {
		l = append(l, i)
	}
	return l
}

func initialModel() model {
	m := model{
		stage: stageBackend,
		selections: map[stage][]item{
			stageBackend: {
				{"Next.js API Routes", "API routes in Next.js", false, false},
				{"tRPC", "Type-safe APIs with tRPC", false, false},
				{"Express.js", "Classic Node.js backend", false, false},
			},
			stageAI: {
				{"Vercel AI SDK", "Streaming + provider abstraction", false, true},
				{"OpenAI", "OpenAI APIs", false, true},
				{"Tambo", "AI agent runtime", false, true},
				{"LangChain", "Chain LLM steps", false, true},
				{"Pinecone", "Vector database", false, true},
				{"LlamaIndex", "Data connectors + retrieval", false, true},
			},
			stageDatabase: {
				{"Postgres", "Relational database", false, true},
				{"Prisma", "ORM for Node.js", false, true},
				{"Drizzle", "Typesafe SQL ORM", false, true},
			},
			stageFrontend: {
				{"Tailwind CSS", "Utility-first CSS", false, true},
				{"Framer Motion", "Motion animations", false, true},
				{"React Query", "Data fetching and caching", false, true},
			},
		},
	}
	m.currentOpts = m.selections[m.stage]
	m.allowMulti = false
	m.list = newList(m.currentOpts, m.getTitle(), m.allowMulti)
	return m
}

func (m model) Init() tea.Cmd {
	return nil
}

func (m model) Update(msg tea.Msg) (tea.Model, tea.Cmd) {
	var cmd tea.Cmd

	switch msg := msg.(type) {
	case tea.KeyMsg:
		switch msg.String() {
		case "up", "down":
			m.list, cmd = m.list.Update(msg)
			return m, cmd
		case " ":
			if m.allowMulti {
				idx := m.list.Index()
				m.currentOpts[idx].selected = !m.currentOpts[idx].selected
				m.selections[m.stage] = m.currentOpts
				m.list.SetItems(toListItems(m.currentOpts))
			}
			return m, nil
		case "enter":
			if !m.allowMulti {
				for i := range m.currentOpts {
					m.currentOpts[i].selected = false
				}
				m.currentOpts[m.list.Index()].selected = true
				m.selections[m.stage] = m.currentOpts
			}
			return m.advanceStage()
		case "q", "ctrl+c":
			return m, tea.Quit
		}
	}

	if m.done {
		if k, ok := msg.(tea.KeyMsg); ok && (k.String() == "q" || k.String() == "ctrl+c") {
			return m, tea.Quit
		}
		return m, nil
	}

	m.list, cmd = m.list.Update(msg)
	return m, cmd
}

func (m model) advanceStage() (tea.Model, tea.Cmd) {
	switch m.stage {
	case stageBackend:
		m.stage = stageAI
		m.allowMulti = true
	case stageAI:
		m.stage = stageDatabase
		m.allowMulti = true
	case stageDatabase:
		m.stage = stageFrontend
		m.allowMulti = true
	case stageFrontend:
		m.stage = stageSummary
		m.done = true
		m.allowMulti = false
		m.list = list.New(nil, compactDelegate{}, 0, 0)
		return m, nil
	}
	m.currentOpts = m.selections[m.stage]
	m.list = newList(m.currentOpts, m.getTitle(), m.allowMulti)
	return m, nil
}

func (m model) getTitle() string {
	switch m.stage {
	case stageBackend:
		return "Select Backend (Enter to confirm)"
	case stageAI:
		return "Select AI Stack (Space to toggle, Enter to confirm)"
	case stageDatabase:
		return "Select Database Tools (Space to toggle, Enter to confirm)"
	case stageFrontend:
		return "Select Frontend Tools (Space to toggle, Enter to confirm)"
	default:
		return ""
	}
}

func (m model) View() string {
	if m.done {
		return m.renderSummary()
	}
	return m.list.View()
}

func (m model) renderSummary() string {
	var b strings.Builder

	section := func(title string, items []item) string {
		out := "  " + title + ":\n"
		any := false
		for _, i := range items {
			if i.selected {
				out += fmt.Sprintf("    - %s\n", i.title)
				any = true
			}
		}
		if !any {
			out += "    (none selected)\n"
		}
		out += "\n"
		return out
	}

	b.WriteString("\n✅ Your AI App Stack\n\n")
	b.WriteString(section("🖥️ Backend", m.selections[stageBackend]))
	b.WriteString(section("🧠 AI Stack", m.selections[stageAI]))
	b.WriteString(section("🗄️ Database", m.selections[stageDatabase]))
	b.WriteString(section("🎨 Frontend", m.selections[stageFrontend]))
	b.WriteString("  Press 'q' to quit.\n")

	return b.String()
}

// -- Styling

var (
	selectedStyle = lipgloss.NewStyle().Foreground(lipgloss.Color("10"))
	cursorStyle   = lipgloss.NewStyle().Foreground(lipgloss.Color("12")).Bold(true)
	descStyle     = lipgloss.NewStyle().Faint(true)
)

type compactDelegate struct{}

func (d compactDelegate) Height() int                               { return 1 }
func (d compactDelegate) Spacing() int                              { return 0 }
func (d compactDelegate) Update(msg tea.Msg, m *list.Model) tea.Cmd { return nil }

func (d compactDelegate) Render(w io.Writer, m list.Model, index int, listItem list.Item) {
	i, ok := listItem.(item)
	if !ok {
		return
	}

	cursor := " "
	if index == m.Index() {
		cursor = cursorStyle.Render(">")
	} else {
		cursor = " "
	}

	check := "[ ]"
	if i.selected {
		check = selectedStyle.Render("[x]")
	}

	title := i.title
	if index == m.Index() {
		title = cursorStyle.Render(title)
	} else if i.selected {
		title = selectedStyle.Render(title)
	}

	desc := descStyle.Render("— " + i.desc)

	line := fmt.Sprintf("%s %s %-25s %s", cursor, check, title, desc)
	fmt.Fprint(w, line)
}

func main() {
	if err := tea.NewProgram(initialModel()).Start(); err != nil {
		fmt.Println("Error:", err)
		os.Exit(1)
	}
}
