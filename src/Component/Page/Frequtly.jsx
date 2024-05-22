import { useState } from "react";
import { Accordion } from "react-bootstrap";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";

const Frequtly = () => {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <div className="bg-[#F7F7F7] w-full">
      <div className=" py-6 my-10 flex-col mobile:gap-12  mx-auto flex w-[90%] justify-between tablet:flxe-col tabletmd:w-[90%] tabletmd:flex-row laptop:w-[80%] desktop:w-[65%] ">
        <div className="flex flex-col  gap-2 mobile:gap-3 items-center tabletmd:items-start flex-1 tabletmd:mt-32">
          <h2 className="text-[#5F2466] text-xl mobile:font-bold tablet:text-4xl ">
            Frequently Asked Question
          </h2>

          <h1 className="text-[#000000] text-base font-light mobile:leading-4">
            <span>
              {" "}
              Here are some of the most commonly asked questions about{" "}
            </span>
            <span className="text-[#5F2466] mobile:text-base font-bold">
              SPELLCPaaS
            </span>
          </h1>
          <h1 className="text-[#000000] mobile:text-base font-light  tabletmd:text-start">
            Still don’t find what you’re looking for?
          </h1>
          <p className="text-[#5F2466] mobile:text-base mobile:font-bold">
            Chat with our experts!
          </p>
        </div>
        <div className="flex justify-center items-center  flex-col flex-1 w-full">
          {data.map((item, i) => (
            <div
              className=" w-full mb-1 border-b-2 border-b-black py-3 "
              key={i}
            >
              <div
                className=" flex justify-between items-center cursor-pointer text-[#000] leading-9  mobile:font-medium mobile:text-xs tablet:text-lg laptop:text-2xl   "
                onClick={() => toggle(i)}
              >
                <h2>{item.question}</h2>
                {selected === i ? <GoTriangleUp /> : <GoTriangleDown />}
              </div>
              {selected === i && <div className=" mt-3">{item.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    question: "Do you offer global SMS coverage ?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Illo nulla facere optio, libero quo provident reprehenderit quis explicabo atque dolores eum blanditiis suscipit vitae.Odit maiores voluptatem nostrum alias excepturi,",
  },
  {
    question: "How many characters can you  incude in my text message ?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Illo nulla facere optio, libero quo provident reprehenderit quis explicabo atque dolores eum blanditiis suscipit vitae.Odit maiores voluptatem nostrum alias excepturi,",
  },
  {
    question: "How do you protect my SMS information?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Illo nulla facere optio, libero quo provident reprehenderit quis explicabo atque dolores eum blanditiis suscipit vitae.Odit maiores voluptatem nostrum alias excepturi,",
  },
  {
    question: "Are there any restrictions on the messages we can send ?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Illo nulla facere optio, libero quo provident reprehenderit quis explicabo atque dolores eum blanditiis suscipit vitae.Odit maiores voluptatem nostrum alias excepturi,",
  },
  {
    question: "What is a CPaaS plan ?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Illo nulla facere optio, libero quo provident reprehenderit quis explicabo atque dolores eum blanditiis suscipit vitae.Odit maiores voluptatem nostrum alias excepturi,",
  },
  {
    question: "What’s included with every plan ?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Illo nulla facere optio, libero quo provident reprehenderit quis explicabo atque dolores eum blanditiis suscipit vitae.Odit maiores voluptatem nostrum alias excepturi,",
  },
];

export default Frequtly;
