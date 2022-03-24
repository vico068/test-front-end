import React, { useEffect, useState } from "react";
import { formatToTable } from "../Ultils/Ultils";
import { Spin, Table , Space } from 'antd';
import { getContacts } from "../services/ServiceContacts";
import { Link } from "react-router-dom";


const columns = [
    {
        title: 'Nome Completo',
        dataIndex: 'full_name',
        key: 'full_name',
        render: item => <span>{item}</span>,
    },
    {
        title: 'Telefone',
        dataIndex: 'phone',
        key: 'phone',
    },
    {
        title: 'Acao',
        key: 'action',
        render: (text, record) => (
          <Space size="middle">
            <Link to={`edit/${record.id}`} params={{ id: record.id }}>Editar</Link>
            <a>Delete</a>
          </Space>
        ),
      },
]

const List = () => {
    const [loading, setLoading] = useState(true);
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        setLoading(true);
            getContacts()
            .then(response => {
                console.log(response);
                setContacts(response.data)
            })
            .catch(e => {
                console.log('error')
            })
        
        setLoading(false);
    }, [loading])

    
    return (
        <Spin size="large" spinning={loading} tip="Loading.." >
            <Table columns={columns} dataSource={formatToTable(contacts)} pagination={false} />
        </Spin>
    )
}

export default List;