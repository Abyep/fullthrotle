import React, { Component } from "react"
import TextField from "@material-ui/core/TextField"
import "./activity.css"
class ActivityModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
      showModal: false,
      id: "",
      member: null,
      activeToday: false,
      selectedDate: null,
    }
  }
  componentDidMount() {
    this.props.member.activity_periods.map((day, index) => {
      let dateString = day.start_time.slice(0, 11)
      let today = new Date().setHours(0, 0, 0, 0)
      if (new Date(dateString).setHours(0, 0, 0, 0) == today) {
        this.setState({
          activeToday: true,
        })
      }
    })
  }

  showModal = (id) => {
    this.setState({
      id: id,
      showModal: true,
    })
  }

  handleDateCheck = (event) => {
    this.props.member.activity_periods.map((day, index) => {
      let dateString = day.start_time.slice(0, 11)
      let selectedDate = new Date(event.target.value).setHours(0, 0, 0, 0)
      if (new Date(dateString).setHours(0, 0, 0, 0) == selectedDate) {
        this.setState({ selectedDate: day })
      }
    })
  }

  render() {
    return (
      <div className="activity-main-div">
        <div>{this.props.member.real_name + " activity log"}</div>
        {this.state.activeToday ? "Active today" : "Not Active Today"}
        Please use this calendar to select other dates.
        <form noValidate>
          <TextField
          style={{marginTop :"2%"}}
            onChange={this.handleDateCheck}
            id="date"
            label="Calendar"
            type="date"
            defaultValue=""
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            marginTop: "5%",
          }}
        >
          <div>
            {" "}
            {this.state.selectedDate &&
              this.state.selectedDate.start_time.slice(0, 11)}{" "}
          </div>
          <div>
            {this.state.selectedDate
              ? this.state.selectedDate.start_time.slice(-7) +
                "to" +
                this.state.selectedDate.end_time.slice(-7)
              : null}
          </div>
        </div>
      </div>
    )
  }
}

export default ActivityModal
