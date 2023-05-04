import React, { useState } from "react";
import { Modal } from "antd";
import { FaReact } from "react-icons/fa";
import { MdOutlineQuiz } from "react-icons/md";
import { RxGithubLogo } from "react-icons/rx";

interface IDataDetail {
  image: JSX.Element;
  shortDescription: string;
  title: string;
  detail: {
    description: string;
    "Front-end": string;
    "Back-end": string;
    role: string;
    member: number;
    demo: string;
    github: string;
  };
}

const Project = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [dataDetail, setDataDetail] = useState<IDataDetail | null>(null);
  const ModalDescription = () => {
    return (
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    );
  };

  const showModal = (item: IDataDetail) => {
    setIsModalOpen(true);
    console.log(item);

    setDataDetail(item);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setDataDetail(null);
  };

  const dataProject: IDataDetail[] = [
    {
      image: <FaReact size={50} color={"#2bebfd"} />,
      shortDescription:
        "Website thương mại điện tử  hỗ trợ và quản lý mua bán sách",
      title: "Website clone Tiki",
      detail: {
        description: "",
        "Front-end": "React.Js, Redux Toolkit, Ant Design",
        "Back-end": "Node.js, MongDB",
        role: "Development",
        member: 1,
        demo: "",
        github: "https://github.com/Thanhdat013/Clone_Tiki",
      },
    },
    {
      image: <RxGithubLogo size={50} color={"#000"} />,
      shortDescription: "Một Blog đơn giản với mã nguồn mở GithubGql",
      title: "Website clone Tiki",
      detail: {
        description: "",
        "Front-end": "Next.Js (TypeScript), Tailwind",
        "Back-end": "Github Gql",
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
        "Front-end": "React.Js (Javascript), Redux, Bootstrap",
        "Back-end": "Node.js, Docker",
        role: "Development",
        member: 1,
        demo: "",
        github: "https://github.com/Thanhdat013",
      },
    },
    {
      image: <MdOutlineQuiz size={50} color={"#7cb305"} />,
      shortDescription: "Website làm các bài quiz với nhiều chủ đề khác nhau",
      title: "Website test quiz",
      detail: {
        description: "",
        "Front-end": "React.Js (Javascript), Redux, Bootstrap",
        "Back-end": "Node.js, Docker",
        role: "Development",
        member: 1,
        demo: "",
        github: "https://github.com/Thanhdat013",
      },
    },
  ];

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
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={false}
          closable={false}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </>
    </>
  );
};

export default Project;
