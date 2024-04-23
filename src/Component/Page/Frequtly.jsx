import { useState } from "react";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";

const Frequtly = () => {
  const [selected, setSelected] = useState(null)
  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null)
    }
    setSelected(i)
  }
  return (
    <div>
      <div className="bg-[#F7F7F7] py-6 my-10  mobile:flex-col tablet:flex-row mobile:px-8 mobile:gap-12  tablet:px-10 mx-auto flex w-full  items-center justify-between ">
        <div className="flex flex-col  mobile:gap-3 ">
          <h2 className="text-[#5F2466] mobile:text-xl mobile:font-bold tablet:text-4xl">
            Frequently Asked Question
          </h2>

          <h1 className="text-[#000000] mobile:text-base mobile:font-light mobile:leading-4">
            Here are some of the most commonly asked questions about
            <p className="text-[#5F2466] mobile:text-base mobile:font-bold">
              SPELLCPaaS
            </p>
          </h1>
          <h1 className="text-[#000000] mobile:text-base mobile:font-light">
            Still don’t find what you’re looking for?
            <p className="text-[#5F2466] mobile:text-base mobile:font-bold">
              Chat with our experts!
            </p>
          </h1>
        </div>
        <div className="w-full flex justify-center items-center  flex-col">

          {data.map((item, i) => (
            <div className=" w-full mb-1 border-b-2 border-b-black py-3 ">
              <div className="w-full flex justify-between items-center cursor-pointer text-[#000] leading-9  mobile:font-medium mobile:text-base tablet:text-lg laptop:text-2xl   " onClick={() => toggle(i)}>
                <h2>{item.question}</h2>
                {
                  selected === i ? <GoTriangleUp /> : <GoTriangleDown />
                }
              </div>
              {
                selected === i && <div className=" mt-3">{item.answer}</div>
              }
            </div>
          ))

          }


        </div>
      </div>
    </div>
  );
};


const data = [
  {
    question: "Do you offer global SMS coverage ?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Illo nulla facere optio, libero quo provident reprehenderit quis explicabo atque dolores eum blanditiis suscipit vitae.Odit maiores voluptatem nostrum alias excepturi,"
  },
  {
    question: "How many characters can you  incude in my text message ?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Illo nulla facere optio, libero quo provident reprehenderit quis explicabo atque dolores eum blanditiis suscipit vitae.Odit maiores voluptatem nostrum alias excepturi,"
  },
  {
    question: "How do you protect my SMS information?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Illo nulla facere optio, libero quo provident reprehenderit quis explicabo atque dolores eum blanditiis suscipit vitae.Odit maiores voluptatem nostrum alias excepturi,"
  },
  {
    question: "Are there any restrictions on the messages we can send ?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Illo nulla facere optio, libero quo provident reprehenderit quis explicabo atque dolores eum blanditiis suscipit vitae.Odit maiores voluptatem nostrum alias excepturi,"
  },
  {
    question: "What is a CPaaS plan ?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Illo nulla facere optio, libero quo provident reprehenderit quis explicabo atque dolores eum blanditiis suscipit vitae.Odit maiores voluptatem nostrum alias excepturi,"
  },
  {
    question: "What’s included with every plan ?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Illo nulla facere optio, libero quo provident reprehenderit quis explicabo atque dolores eum blanditiis suscipit vitae.Odit maiores voluptatem nostrum alias excepturi,"
  },
]

export default Frequtly;
