import React from "react";
import { Button, Form } from "react-bootstrap";
import { FaTrashAlt, FaPen, FaCheck } from "react-icons/fa";
import { HiXMark } from "react-icons/hi2";
import axios from "axios";

class DataMahasiswa extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      _id: this.props._id,
      nim: this.props.nim,
      nama: this.props.nama,
      email: this.props.email,
      telp: this.props.telp,
    };
  }
  editData() {
    this.setState({ isEdit: !this.state.isEdit });
  }
  render() {
    const API_URL = "http://localhost:5984/mahasiswas/";
    const username = "admin";
    const password = "password";

    const deleteData = (id, rev) => {
      axios.delete(`${API_URL}${id}/?rev=${rev}`, {
        auth: {
          username: username,
          password: password,
        },
      });
    };

    const updateData = () => {
      try {
        axios.put(
          `${API_URL}/${this.props._id}`,
          {
            _rev: this.props._rev,
            nim: this.state.nim,
            nama: this.state.nama,
            email: this.state.email,
            telp: this.state.telp,
          },
          {
            headers: {
              "content-type": "application/json",
            },
            auth: {
              username: username,
              password: password,
            },
          }
        );
      } catch (error) {
        if (error.response) {
        }
      }
    };

    if (this.state.isEdit) {
      return (
        <tr>
          <td></td>
          <td>
            <Form.Control
              type="text"
              value={this.state.nim}
              onChange={(e) => this.setState({ nim: e.target.value })}
            />
          </td>
          <td>
            <Form.Control
              type="text"
              value={this.state.nama}
              onChange={(e) => this.setState({ nama: e.target.value })}
            />
          </td>
          <td>
            <Form.Control
              type="email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </td>
          <td>
            <Form.Control
              type="text"
              value={this.state.telp}
              onChange={(e) => this.setState({ telp: e.target.value })}
            />
          </td>
          <td className="">
            <Button
              variant="success"
              size="sm"
              className="pt-0 m-1"
              onClick={() => {
                updateData();
                this.editData();
                this.props.msg("Update Data Berhasil");
              }}
            >
              <FaCheck />
            </Button>
            <Button
              variant="danger"
              size="sm"
              className="pt-0 m-1"
              onClick={() => {
                this.editData();
              }}
            >
              <HiXMark />
            </Button>
          </td>
        </tr>
      );
    } else {
      return (
        <tr>
          <td>{this.props._id}</td>
          <td>{this.props.nim}</td>
          <td>{this.props.nama}</td>
          <td>{this.props.email}</td>
          <td>{this.props.telp}</td>
          <td>
            <Button
              variant="success"
              size="sm"
              className="pt-0 m-1"
              onClick={() => {
                this.editData();
              }}
            >
              <FaPen />
            </Button>
            <Button
              variant="danger"
              size="sm"
              className="pt-0 m-1"
              onClick={() => {
                deleteData(this.props._id, this.props._rev);
                this.props.msg("Hapus Data Berhasil");
              }}
            >
              <FaTrashAlt />
            </Button>
          </td>
        </tr>
      );
    }
  }
}

export default DataMahasiswa;
