import { Modal } from "antd"
import { useState } from "react"
import { isMobile } from "react-device-detect"

import { FaReact } from "react-icons/fa"
import { MdOutlineQuiz } from "react-icons/md"
import { SiNextdotjs } from "react-icons/si"
interface DataDetail {
  image: JSX.Element
  shortDescription: string
  title: string
  detail: {
    description: string
    Frontend: string
    Backend: string
    role: string
    member: number
    demo: string
    github: string
  }
}

const Project = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [dataDetail, setDataDetail] = useState<DataDetail | null>(null)

  const showModal = (item: DataDetail) => {
    setIsModalOpen(true)
    console.log(item)

    setDataDetail(item)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
    setDataDetail(null)
  }

  const dataProject: DataDetail[] = [
    {
      image: <FaReact size={50} color={"#2bebfd"} />,
      shortDescription:
        "Website thương mại điện tử  hỗ trợ và quản lý mua bán sách",
      title: "Website clone Tiki",
      detail: {
        description:
          "Xây dựng clone Website thương mại điện tử hỗ trợ và quản lý mua bán sách Tiki ",
        Frontend: "React.Js, Redux Toolkit, Ant Design",
        Backend: "Node.js, MongDB",
        role: "Development",
        member: 1,
        demo: "",
        github: "https://github.com/Thanhdat013/Clone_Tiki",
      },
    },
    {
      image: <SiNextdotjs size={50} color={"#20262E"} />,
      shortDescription: "Một Blog đơn giản với mã nguồn mở GithubGql",
      title: "trang cv basic",
      detail: {
        description: "",
        Frontend: "Next.Js (TypeScript), Material UI v5",
        Backend: "Json",
        role: "Development",
        member: 1,
        demo: "",
        github:
          "https://github.com/Thanhdat013/Nextjs-basic-blog_with_Github_GraphQL",
      },
    },
    {
      image: <MdOutlineQuiz size={50} color={"#7cb305"} />,
      shortDescription: "Website làm các bài quiz với nhiều chủ đề khác nhau",
      title: "Website test quiz",
      detail: {
        description: "",
        Frontend: "React.Js (Javascript), Redux, Bootstrap",
        Backend: "Node.js, Docker",
        role: "Development",
        member: 1,
        demo: "",
        github: "https://github.com/Thanhdat013",
      },
    },
  ]

  return (
    <>
      {" "}
      <div className="arlo_tm_section" id="project">
        <div className="arlo_tm_services_wrap">
          <div className="container">
            <div className="arlo_tm_title_holder">
              <h3>My Project</h3>
              <span>Các dự án đã làm</span>
            </div>
            <div className="list_wrap">
              <ul>
                {dataProject.map((item, index) => (
                  <li key={index} onClick={() => showModal(item)}>
                    <div className="inner">
                      <div className="icon">{item.image}</div>
                      <div className="title_service">
                        <h3>{item.title}</h3>
                      </div>
                      <div className="text">
                        <p>{item.shortDescription}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* modal */}
      <>
        <Modal
          title={
            dataDetail && dataDetail.title ? `Dự án ${dataDetail.title}` : ""
          }
          width={isMobile ? "70vw" : "32vw"}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={false}
          closable={false}
        >
          {dataDetail && (
            <ul style={{ listStyle: "none" }}>
              <li>{`Miêu tả: ${dataDetail.title}`}</li>
              <li>{`Frontend: ${dataDetail.detail.Frontend} `}</li>
              <li>{`Backend: ${dataDetail.detail.Backend} `}</li>
              <li>{`Số lượng thành viên dự án: ${dataDetail.detail.member}`}</li>
              <li>{`Vai trò: ${dataDetail.detail.role}`}</li>
              <li>
                Demo:{" "}
                <a target="_blank" rel="noreferrer noopener">
                  {dataDetail.detail.demo}
                </a>
              </li>
              <li>
                Github:{" "}
                <a
                  href="https://github.com/Thanhdat013/Clone_Tiki"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {dataDetail.detail.github}
                </a>{" "}
              </li>
            </ul>
          )}
        </Modal>
      </>
    </>
  )
}

export default Project
