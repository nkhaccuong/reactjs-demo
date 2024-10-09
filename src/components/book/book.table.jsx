import { Table } from "antd";
import { useEffect, useState } from "react";
import { fetchGetAllBook } from "../../services/api.services";
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';


const BookTable = () => {
    const [dataBook, setDataBook] = useState([]);
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const [total, setTotal] = useState(0);
    useEffect(() => {
        loadBook();
    }, [current, pageSize])

    const loadBook = async () => {
        const res = await fetchGetAllBook(current, pageSize);
        if (res.data) {
            setDataBook(res.data.result);
            setCurrent(res.data.meta.current);
            setPageSize(res.data.meta.pageSize);
            setTotal(res.data.meta.total);
        }
    }
    console.log("Check result: ", dataBook);
    const onChange = (pagination, filters, sorter, extra) => {
        if (pagination && pagination.current) {
            if (+pagination.current !== +current) {
                setCurrent(+pagination.current);
            }
        }
        if (pagination && pagination.pageSize) {
            if (+pagination.pageSize !== +pageSize) {
                setPageSize(+pagination.pageSize);
            }
        }
    }
    const columns = [
        {
            title: 'STT',
            render: (_, record, index) => {
                return (
                    <>{(index + 1) + (current - 1) * pageSize}</>
                )
            }
        },
        {
            title: 'ID',
            dataIndex: '_id',
            key: 'id',
        },
        {
            title: 'Tiêu Đề',
            dataIndex: 'mainText',
            key: 'mainText',
        },
        {
            title: 'Giá tiền',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Số lượng',
            dataIndex: 'quantity',
            key: 'quantity',
        },
        {
            title: 'Tác giả',
            dataIndex: 'author',
            key: 'author',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <div style={{ display: "flex", gap: "20px" }}>
                    <EditOutlined
                        // onClick={() => {
                        //     setDataUpdate(record);
                        //     setIsModalUpdateOpen(true);
                        // }}
                        style={{ cursor: "pointer", color: "orange" }} />
                    {/* <Popconfirm
                        title="Delete the task"
                        description="Are you sure to delete this task?"
                        onConfirm={() => { handleDeleteUser(record._id) }}
                        onCancel={cancel}
                        okText="Yes"
                        cancelText="No"
                        placement='left'
                    > */}
                    <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
                    {/* </Popconfirm> */}

                </div>
            ),
        }

    ];

    return (
        <Table dataSource={dataBook} columns={columns} rowKey="_id"
            pagination={
                {
                    current: current,
                    pageSize: pageSize,
                    showSizeChanger: true,
                    total: total,
                    showTotal: (total, range) => { return (<div> {range[0]}-{range[1]} trên {total} rows</div>) }
                }}
            onChange={onChange}
        />
    )
}
export default BookTable;