import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
import jsonData from "./test.json"
import ActivityModal from "./ActivityModal"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
      showModal: false,
      member: null,
    }
  }
  componentDidMount() {
    this.setState({ data: jsonData })
    document.addEventListener("mousedown", this.captureClick, false)
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.captureClick, false)
  }

  showModal = (member) => {
    this.setState({
      member: member,
      showModal: true,
    })
  }

  captureClick = (e) => {
    if (this.node.contains(e.target)) {
      return
    }
    this.setState({
      showModal: false,
    })
  }

  render() {
    return (
      <div className="App">
        <div className="app-parent-div">
          {this.state.data &&
            this.state.data.members.map((member, index) => (
              <div
                className="member-list-div"
                onClick={() => this.showModal(member)}
              >
                <div> {member.real_name}</div>
                <div>{member.tz}</div>
              </div>
            ))}
        </div>
        <div ref={(node) => (this.node = node)}>
          {this.state.showModal && <ActivityModal member={this.state.member} />}
        </div>
      </div>
    )
  }
}

export default App
