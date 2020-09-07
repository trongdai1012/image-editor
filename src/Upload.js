const React = require('react')
class Upload extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            file: []
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        console.log()
        this.setState({
            file: URL.createObjectURL(event.target.files[0])
        })
    }

    render() {
        return (
            <div>
                <input type="file" multiple onChange={this.handleChange} accept={this.props.accept} />
                {console.log(this.state.file)}
                <img src={this.state.file} />
            </div>
        );
    }
}

module.exports = Upload