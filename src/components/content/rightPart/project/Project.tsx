import { Modal } from "antd"
import { useState } from "react"
import { isMobile } from "react-device-detect"

import { FaReact } from "react-icons/fa"
import { MdOutlineQuiz } from "react-icons/md"
import { SiNextdotjs } from "react-icons/si"
import { BsArrowRight } from "react-icons/bs"
import { useTranslation } from "react-i18next"

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
  const { t } = useTranslation()
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
      shortDescription: t("detailProject.project-1.shortDescription"),

      title: t("detailProject.project-1.title"),
      detail: {
        description: t("detailProject.project-1.description"),
        Frontend: t("detailProject.project-1.frontend"),
        Backend: t("detailProject.project-1.backend"),
        role: t("detailProject.project-1.role"),
        member: 1,
        demo: t("detailProject.project-1.demo"),
        github: t("detailProject.project-1.github"),
      },
    },
    {
      image: <SiNextdotjs size={50} color={"#20262E"} />,
      shortDescription: t("detailProject.project-2.shortDescription"),
      title: t("detailProject.project-2.title"),
      detail: {
        description: t("detailProject.project-2.description"),
        Frontend: t("detailProject.project-2.frontend"),
        Backend: t("detailProject.project-2.backend"),
        role: t("detailProject.project-2.role"),
        member: 1,
        demo: t("detailProject.project-2.demo"),
        github: t("detailProject.project-2.github"),
      },
    },
    {
      image: <MdOutlineQuiz size={50} color={"#7cb305"} />,
      shortDescription: t("detailProject.project-3.shortDescription"),
      title: t("detailProject.project-3.title"),
      detail: {
        description: t("detailProject.project-3.description"),
        Frontend: t("detailProject.project-3.frontend"),
        Backend: t("detailProject.project-3.backend"),
        role: t("detailProject.project-3.role"),
        member: 1,
        demo: t("detailProject.project-3.demo"),
        github: t("detailProject.project-3.github"),
      },
    },
  ]

  return (
    <>
      {" "}
      <div
        style={{ paddingTop: "50px" }}
        className={
          isMobile ? "arlo_tm_section device-mobile" : "arlo_tm_section"
        }
        id="project"
      >
        <div
          className={
            isMobile
              ? "arlo_tm_services_wrap skill-mobile"
              : "arlo_tm_services_wrap"
          }
        >
          <div className="container">
            <div
              className={
                isMobile
                  ? "arlo_tm_title_holder project-mobile"
                  : "arlo_tm_title_holder"
              }
            >
              <h3>{t("project.heading")}</h3>
              <span>{t("project.title")}</span>
            </div>
            <div
              className={isMobile ? "list_wrap project-mobile" : "list_wrap"}
            >
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
                      <div
                        style={{
                          marginTop: "8px",
                          display: "flex",
                          gap: "16px",
                          alignItems: "center",
                        }}
                      >
                        <BsArrowRight />
                        <p>{t("project.seeMore")}</p>
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
            dataDetail && dataDetail.title
              ? `${t("project.name")} ${dataDetail.title}`
              : ""
          }
          width={isMobile ? "70vw" : "40vw"}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={false}
          closable={false}
        >
          {dataDetail && (
            <ul style={{ listStyle: "none" }}>
              <li>{`${t("project.desc")} ${dataDetail.detail.description}`}</li>
              <li>{`${t("project.frontend")} ${
                dataDetail.detail.Frontend
              } `}</li>
              <li>{`${t("project.backend")} ${dataDetail.detail.Backend}`}</li>
              <li>{`${t("project.member")} ${dataDetail.detail.member}`}</li>
              <li>{`${t("project.role")} ${dataDetail.detail.role}`}</li>
              <li>
                {t("project.demo")}
                <a target="_blank" rel="noreferrer noopener">
                  {dataDetail.detail.demo}
                </a>
              </li>
              <li>
                {t("project.github")}
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
