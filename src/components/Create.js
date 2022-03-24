import { Form, Input, Button, notification } from "antd";
import { createContact } from "../services/ServiceContacts";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    createContact(values)
      .then((response) => {
        notification.open({
          message: "Sucesso!",
          type: "success",
          description: "Contato criado com sucesso!",
          onClick: () => {
            window.location.href("/");
          },
        });
        setTimeout(function () {
            navigate("/");
          }, 2000);
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
          Criar contato
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Create;
