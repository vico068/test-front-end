import { Form, Input, Button, notification } from "antd";
import { editContact, getContact } from "../services/ServiceContacts";
import React, { useEffect, useState } from "react";
import { useParams,useNavigate  } from "react-router-dom";

const Edit = (match) => {
  const [loading, setLoading] = useState(true);
  const [contact, setContact] = useState([]);
  let { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getContact(id)
      .then((response) => {
        setContact(response.data);
        setLoading(false);
      })
      .catch((e) => {
        console.log("error");
      });
  }, [id]);

  const onFinish = (values) => {
    editContact(contact.id, values)
      .then((response) => {
        notification.open({
          message: "Sucesso!",
          type: "success",
          description: "Contato editado com sucesso!",
          onClick: () => {
            window.location.href("/");
          },
        });
        setTimeout(function(){
          navigate('/') 

        },2000)
      })
      .catch((e) => {
        notification.open({
          message: "Ops!",
          type: "error",
          description: e.response.data.message,
          onClick: () => {
            window.location.href("/");
          },
        });
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    loading ? <div></div> :

    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="horizontal"
      size="large"
    >
      <Form.Item
        label="Nome Completo "
        name="full_name"
        initialValue={contact.length !== 0 ? contact.full_name : ""}
        rules={[
          {
            required: true,
            message: "Por favor entre com nome completo",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Telefone"
        name="phone"
        initialValue={contact.length !== 0 ? contact.phone : ""}
        rules={[
          {
            required: true,
            message: "Por favor entre com um telefone",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Editar contato
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Edit;
