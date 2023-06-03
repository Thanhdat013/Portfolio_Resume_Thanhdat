import { Modal } from "antd"
import { useState, useEffect } from "react"

import { useTranslation } from "react-i18next"
import { BsArrowRight } from "react-icons/bs"
import { FaReact } from "react-icons/fa"
import { ImProfile } from "react-icons/im"
import { MdOutlineFoodBank } from "react-icons/md"
import { RiNetflixLine } from "react-icons/ri"

interface DataDetail {
  image: JSX.Element
  shortDescription: string
  title: string
  detail: {
    description: string
    feature_1: string
    feature_2: string
    feature_3: string
    feature_4: string

    feature_5?: string
    feature_6?: string
    feature_7?: string

    frontend: string
    backend: string
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
    setDataDetail(item)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
    setDataDetail(null)
  }
  const [isMobileDevice, setIsMobileDevice] = useState<boolean>(false)
  useEffect(() => {
    if (window.innerWidth < 740) setIsMobileDevice(true)
  }, [isMobileDevice])
  const dataProject: DataDetail[] = [
    {
      image: <FaReact size={50} color={"#2bebfd"} />,
      shortDescription: t("detailProject.project-1.shortDescription"),

      title: t("detailProject.project-1.title"),
      detail: {
        description: t("detailProject.project-1.description"),
        feature_1: t("detailProject.project-1.feature_1"),
        feature_2: t("detailProject.project-1.feature_2"),
        feature_3: t("detailProject.project-1.feature_3"),
        feature_4: t("detailProject.project-1.feature_4"),
        feature_5: t("detailProject.project-1.feature_5") || "",
        feature_6: t("detailProject.project-1.feature_6") || "",
        feature_7: t("detailProject.project-1.feature_7") || "",
        frontend: t("detailProject.project-1.frontend"),
        backend: t("detailProject.project-1.backend"),
        role: t("detailProject.project-1.role"),
        member: 1,
        demo: t("detailProject.project-1.demo"),
        github: t("detailProject.project-1.github"),
      },
    },
    {
      image: <MdOutlineFoodBank size={50} color={"#E57C23"} />,
      shortDescription: t("detailProject.project-2.shortDescription"),
      title: t("detailProject.project-2.title"),
      detail: {
        description: t("detailProject.project-2.description"),
        feature_1: t("detailProject.project-2.feature_1"),
        feature_2: t("detailProject.project-2.feature_2"),
        feature_3: t("detailProject.project-2.feature_3"),
        feature_4: t("detailProject.project-2.feature_4"),

        frontend: t("detailProject.project-2.frontend"),
        backend: t("detailProject.project-2.backend"),
        role: t("detailProject.project-2.role"),
        member: 1,
        demo: t("detailProject.project-2.demo"),
        github: t("detailProject.project-2.github"),
      },
    },
    {
      image: <ImProfile size={50} color={"#526D82"} />,
      shortDescription: t("detailProject.project-3.shortDescription"),
      title: t("detailProject.project-3.title"),
      detail: {
        description: t("detailProject.project-3.description"),
        feature_1: t("detailProject.project-3.feature_1"),
        feature_2: t("detailProject.project-3.feature_2"),
        feature_3: t("detailProject.project-3.feature_3"),
        feature_4: t("detailProject.project-3.feature_4"),

        frontend: t("detailProject.project-3.frontend"),
        backend: t("detailProject.project-3.backend"),
        role: t("detailProject.project-3.role"),
        member: 1,
        demo: t("detailProject.project-3.demo"),
        github: t("detailProject.project-3.github"),
      },
    },
    {
      image: <RiNetflixLine size={50} color={"#e50914"} />,
      shortDescription: t("detailProject.project-4.shortDescription"),
      title: t("detailProject.project-4.title"),
      detail: {
        description: t("detailProject.project-4.description"),
        feature_1: t("detailProject.project-4.feature_1"),
        feature_2: t("detailProject.project-4.feature_2"),
        feature_3: t("detailProject.project-4.feature_3"),
        feature_4: t("detailProject.project-4.feature_4"),
        feature_5: t("detailProject.project-4.feature_5") || "",

        frontend: t("detailProject.project-4.frontend"),
        backend: t("detailProject.project-4.backend"),
        role: t("detailProject.project-4.role"),
        member: 1,
        demo: t("detailProject.project-4.demo"),
        github: t("detailProject.project-4.github"),
      },
    },
  ]

  return (
    <>
      {" "}
      <div
        className={
          isMobileDevice ? "arlo_tm_section device-mobile" : "arlo_tm_section"
        }
        id="project"
      >
        <div
          className={
            isMobileDevice
              ? "arlo_tm_services_wrap skill-mobile"
              : "arlo_tm_services_wrap"
          }
        >
          <div className="container">
            <div
              className={
                isMobileDevice
                  ? "arlo_tm_title_holder project-mobile"
                  : "arlo_tm_title_holder"
              }
            >
              <h3>{t("project.heading")}</h3>
              <span>{t("project.title")}</span>
            </div>
            <div
              className={
                isMobileDevice ? "list_wrap project-mobile" : "list_wrap"
              }
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
          width={isMobileDevice ? "80vw" : "60vw"}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={false}
        >
          {dataDetail && (
            <ul style={{ listStyle: "none", fontFamily: "Open Sans" }}>
              <li>{`${t("project.desc")} ${dataDetail.detail.description}`}</li>
              <li>
                {t("project.feature")}
                <ul style={{ listStyle: "inside", paddingRight: "8px" }}>
                  <li>{dataDetail.detail.feature_1}</li>
                  <li>{dataDetail.detail.feature_2}</li>
                  <li>{dataDetail.detail.feature_3}</li>
                  <li>{dataDetail.detail.feature_4}</li>

                  {dataDetail.detail.feature_5 && (
                    <li>{dataDetail.detail.feature_5}</li>
                  )}
                  {dataDetail.detail.feature_6 && (
                    <li>{dataDetail.detail.feature_6}</li>
                  )}
                  {dataDetail.detail.feature_7 && (
                    <li>{dataDetail.detail.feature_7}</li>
                  )}
                </ul>
              </li>
              <li>{`${t("project.frontend")} ${
                dataDetail.detail.frontend
              } `}</li>
              <li>{`${t("project.backend")} ${dataDetail.detail.backend}`}</li>
              <li>{`${t("project.member")} ${dataDetail.detail.member}`}</li>
              <li>{`${t("project.role")} ${dataDetail.detail.role}`}</li>
              <li>
                {t("project.demo")}
                <a
                  href={dataDetail.detail.demo}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {dataDetail.detail.demo}
                </a>
              </li>
              <li>
                {t("project.github")}
                <a
                  href={dataDetail.detail.github}
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
