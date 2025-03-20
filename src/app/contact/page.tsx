import React from "react";
import { HeaderWrapper } from "@/components/headerWrapper/header-wrapper";
import { Col, Row } from "antd";
import { Checkbox } from "@/components/checkbox/checkbox";
import { Footer } from "@/components/footer/footer";

const Contact = () => {
  return (
    <div>
      <HeaderWrapper headerTitle="Contact" landingBg="contactBG" />
      <div className="flex flex-col items-center justify-center gap-8 p-7">
        <h2 className="text-8xl font-grotesk-medium">Contact our team</h2>
        <div className="text-center text-xl flex flex-col gap-3">
          <p>
            Thank you for visiting! We&apos;re so glad you&apos;re here and
            interested in getting in touch. Whether you&apos;re looking to
            capture a special moment, inquire about our services, or simply have
            a question, we’re here to help.
          </p>
          <p>
            At Shotbyportable, we’re passionate about capturing your special
            moments with high-quality, personalized photos. Whether you’re
            planning a wedding, family shoot, or event, we’d love to hear from
            you!
          </p>
          <p>
            Fill out the form below to get in touch, or contact us directly by
            phone or email. We look forward to bringing your vision to life!
          </p>
        </div>
      </div>
      <div className="p-7">
        <Row>
          <Col xs={12}>
            <div className="flex flex-col gap-5">
              <div className="flex gap-5 items-center">
                <div className="w-[50%]">
                  <label className="text-xl" htmlFor="firstname">First name</label>
                  <input
                    type="text"
                    id="firstname"
                    placeholder="First name"
                    className="w-full p-2 border mt-3 bg-[#F5F5F5] border-gray-300 rounded-md"
                  />
                </div>
                <div className="w-[50%]">
                  <label className="text-xl" htmlFor="lastname">Last name</label>
                  <input
                    type="text"
                    id="lastname"
                    placeholder="Last name"
                    className="w-full p-2 border mt-3 bg-[#F5F5F5] border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div>
                <label className="text-xl" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="w-full p-2 border mt-3 bg-[#F5F5F5] border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="text-xl" htmlFor="phone">Phone number</label>
                <input
                  type="text"
                  id="phone"
                  placeholder="Phone number"
                  className="w-full p-2 border mt-3 bg-[#F5F5F5] border-gray-300 rounded-md"/>
              </div>
              <div>
                <label className="text-xl" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  placeholder="Message"
                  cols={30}
                  rows={5}
                  className="w-full p-2 border mt-3 bg-[#F5F5F5] border-gray-300 rounded-md" />
              </div>
              <div className="grid grid-cols-2 gap-5 mt-8">
                <Checkbox checkboxName="Wedding Photography" />
                <Checkbox checkboxName="Lifestyle Photography" />
                <Checkbox checkboxName="Photography" />
                <Checkbox checkboxName="Videography" />
                <Checkbox checkboxName="Proffesional shoots" />
              </div>

              <div className="flex w-full justify-center items-center">
                <button className="bg-black w-1/2 text-white py-3 px-10 cursor-pointer rounded-lg">Send Message</button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
