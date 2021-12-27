import React from "react";
import { Row, Col, Divider } from "antd";
import Image from "next/image";
import { Statistic, Card } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import Head from "next/head";
import { useSelector } from "react-redux";

const Profile = () => {
  const userInfo = useSelector((state) => state.userData);
  return (
    <div className="w-full container m-auto space-y-10">
      <Head>
        <title>{userInfo.username}</title>
      </Head>
      <h1 className="text-white font-bold text-center text-4xl mt-5">
        User Dashboard
      </h1>
      <Row>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <div className="space-y-2 flex flex-col justify-center items-center">
            <Image
              className="rounded-full object-contain"
              src={
                "https://helostatus.com/wp-content/uploads/2021/08/profile-pictures-for-WhatsApp.jpg"
              }
              width={240}
              height={240}
              placeholder="blur"
              blurDataURL="https://helostatus.com/wp-content/uploads/2021/08/profile-pictures-for-WhatsApp.jpg"
            />
            <h1 className="text-white text-2xl">Mohit Singh Bisht</h1>
            <p className="text-base">bmohit980@gmail.com</p>
            <p className="text-2xl">#1 Rank</p>
          </div>
        </Col>
        <Col xs={{ span: 11, offset: 1 }} flex="1">
          <div className="space-y-10">
            <Row gutter={16}>
              <Col span={12}>
                <Card style={{ backgroundColor: "#1F2937", border: "none" }}>
                  <Statistic
                    title="Solved Questions"
                    value={11.28}
                    precision={2}
                    valueStyle={{ color: "#3f8600" }}
                    prefix={<ArrowUpOutlined />}
                    suffix="%"
                  />
                </Card>
              </Col>
              <Col span={12}>
                <Card
                  style={{
                    backgroundColor: "#1F2937",
                    border: "none",
                  }}
                >
                  <Statistic
                    title="Attempted Questions"
                    value={9.3}
                    precision={2}
                    valueStyle={{ color: "#cf1322" }}
                    prefix={<ArrowDownOutlined />}
                    suffix="%"
                  />
                </Card>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Card style={{ backgroundColor: "#1F2937", border: "none" }}>
                  <Statistic
                    title="Solved Questions"
                    value={11.28}
                    precision={2}
                    valueStyle={{ color: "#3f8600" }}
                    prefix={<ArrowUpOutlined />}
                    suffix="%"
                  />
                </Card>
              </Col>
              <Col span={12}>
                <Card style={{ backgroundColor: "#1F2937", border: "none" }}>
                  <Statistic
                    title="Attempted Questions"
                    value={9.3}
                    precision={2}
                    valueStyle={{ color: "#cf1322" }}
                    prefix={<ArrowDownOutlined />}
                    suffix="%"
                  />
                </Card>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Profile;
