import React, { Component } from "react";

class CargaVacaciones extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vacaciones: {},
      error: null
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch(this.props.url);
      const data = await response.json();
      this.setState({ vacaciones: data });
    } catch (error) {
      this.setState({ error });
    }
  }

  render() {
    const { vacaciones, error } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!vacaciones) {
      return <div>Cargando...</div>;
    } else {
      return (
        <div>
          {this.props.children(vacaciones)}
        </div>
      );
    }
  }
}

export default CargaVacaciones;