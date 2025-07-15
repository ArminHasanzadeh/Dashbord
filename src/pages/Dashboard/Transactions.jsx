import React, { useState } from "react";
import CardImg from "../../../public/Card.png";
import CardBlack from "../../../public/CardBlack.png";
import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";
import { ChartContainer } from "../../../components/ui/chart";
import { Checkbox } from "../../../components/ui/checkbox";
import { Button } from "../../../components/ui/button";
import {
  ChartTooltip,
  ChartTooltipContent,
} from "../../../components/ui/chart";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
    card: "1234***",
    transactionId: "#12548796",
    isIncome: true,
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
    card: "1234***",
    transactionId: "#12548796",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
    card: "1234***",
    transactionId: "#12548796",
    isIncome: true,
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
    card: "1234***",
    transactionId: "#12548796",
    isIncome: true,
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
    card: "1234***",
    transactionId: "#12548796",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
    card: "1234***",
    transactionId: "#12548796",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
    card: "1234***",
    transactionId: "#12548796",
    isIncome: true,
  },
];

export const description = "A bar chart with a label";
const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
};

function Transactions() {
  const [invoiceData, setInvoiceData] = useState({
    data: invoices,
    type: "All",
  });


  console.log(invoiceData);
  
    
  

  return (
    <section className="w-full h-[100vh] bg-[var(--BgColor)] pb-10 overflow-x-hidden ">
      <div className="flex p-10 pt-6 w-full h-auto gap-25 justify-center items-center max-xl:flex-col">
        <div className=" flex justify-center items-start flex-col gap-2">
          <h2 className="font-bold text-2xl">My Cards</h2>
          <div className=" flex justify-d gap-2 items-center flex-col w-100 h-60  rounded-2xl bg-[var(--CardColor)] ">
            <div className="flex justify-start items-center w-[90%] pt-2  h-[30%] text-white">
              <div className="flex-col flex justify-center items-start  w-[50%] h-auto">
                <div>
                  <p className="text-[var(--NavColor)]">Balance</p>
                  <p className="text-[16px]">$5,345</p>
                </div>
              </div>
              <div className="flex-col flex justify-center items-end w-[50%] h-auto">
                <span>
                  <img className="w-8 h-8 object-cover" src={CardImg} alt="" />
                </span>
              </div>
            </div>
            <div className="flex justify-start items-center w-[90%]  h-[30%] text-white">
              <div className="flex-col flex justify-center items-start  w-[50%] h-auto">
                <div>
                  <p className="text-[var(--NavColor)]">CARD HOLDER</p>
                  <p className="text-[16px]">Eddy Cusuma</p>
                </div>
              </div>
              <div className="flex-col flex justify-center items-start w-[50%] h-auto">
                <div>
                  <p className="text-[var(--NavColor)]">VALID THRU</p>
                  <p className="text-[16px]">12/22</p>
                </div>
              </div>
            </div>
            <div className="flex justify-start items-center w-[100%] p-3   h-[30%] text-white bg-[var(--HoverColor)] rounded-b-2xl mt-2">
              <div className="w-[80%] flex">
                <div className=" flex justify-center items-start  w-[70%] h-auto">
                  <div className="flex pl-6 gap-2 text-[20px]">
                    <p>5423</p>
                    <p>****</p>
                    <p>****</p>
                    <p>5423</p>
                  </div>
                </div>
                <div className="flex-col flex justify-center items-end w-[30%] h-auto">
                  <span>
                    <svg
                      width="44"
                      height="30"
                      viewBox="0 0 44 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="15"
                        cy="15"
                        r="15"
                        fill="white"
                        fill-opacity="0.5"
                      />
                      <circle
                        cx="29"
                        cy="15"
                        r="15"
                        fill="white"
                        fill-opacity="0.5"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex justify-center items-end flex-col gap-2 ">
          <h2 className="">See All</h2>
          <div className=" flex justify-start gap-2 items-center flex-col w-100 h-60  rounded-2xl border-2  border-[var(--NavColor)] bg-white ">
            <div className="flex justify-start items-center w-[90%] pt-2  h-[30%] text-[var(--TextColor)]">
              <div className="flex-col flex justify-center items-start  w-[50%] h-auto">
                <div>
                  <p className="text-[var(--NavColor)]">Balance</p>
                  <p className="text-[16px]">$5,345</p>
                </div>
              </div>
              <div className="flex-col flex justify-center items-end w-[50%] h-auto ">
                <span>
                  <img src={CardBlack} alt="" />
                </span>
              </div>
            </div>
            <div className="flex justify-start items-center w-[90%]  h-[30%] text-[var(--TextColor)]">
              <div className="flex-col flex justify-center items-start  w-[50%] h-auto">
                <div>
                  <p className="text-[var(--NavColor)]">CARD HOLDER</p>
                  <p className="text-[16px]">Eddy Cusuma</p>
                </div>
              </div>
              <div className="flex-col flex justify-center items-start w-[50%] h-auto">
                <div>
                  <p className="text-[var(--NavColor)]">VALID THRU</p>
                  <p className="text-[16px]">12/22</p>
                </div>
              </div>
            </div>
            <div className="flex justify-start items-center w-[100%] p-3   h-[30%] text-[var(--TextColor)] border-[var(--NavColor)] border-t-2 rounded-b-2xl mt-2">
              <div className="w-[80%] flex">
                <div className=" flex justify-center items-start  w-[70%] h-auto">
                  <div className="flex pl-6 gap-2 text-[20px]">
                    <p>5423</p>
                    <p>****</p>
                    <p>****</p>
                    <p>5423</p>
                  </div>
                </div>
                <div className="flex-col flex justify-center items-end w-[30%] h-auto">
                  <span>
                    <svg
                      width="44"
                      height="30"
                      viewBox="0 0 44 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="15"
                        cy="15"
                        r="15"
                        fill="gray"
                        fill-opacity="0.5"
                      />
                      <circle
                        cx="29"
                        cy="15"
                        r="15"
                        fill="gray"
                        fill-opacity="0.5"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex justify-center items-start flex-col gap-2  ">
          <h2 className="font-bold text-2xl">My Expense</h2>
          <Card className="w-100 h-60 ">
            <CardContent>
              <ChartContainer config={chartConfig}>
                <BarChart
                  accessibilityLayer
                  data={chartData}
                  margin={{
                    top: 20,
                  }}
                >
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8}>
                    <LabelList
                      position="top"
                      offset={12}
                      className="fill-foreground"
                      fontSize={12}
                    />
                  </Bar>
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="w-full h-auto flex justify-center items-center flex-col gap-5 pb-20 ">
        <div className="flex justify-start items-center w-[85%]">
          <h2 className="font-bold text-2xl">Recent Transactions</h2>
        </div>
        <div className=" w-[85%] h-auto flex justify-start items-center">
          <ul className="flex justify-start  items-center gap-10 w-full">
            <li
              onClick={() =>
                setInvoiceData({
                  data: invoices,
                  type: "All",
                })
              }
              className={`${invoiceData?.type === "All" && " border-b-2  !border-[var(--Tablecolor)] text-[var(--Tablecolor)]"} cursor-pointer transition border-b-2 border-transparent hover:border-b-2 hover:text-[var(--Tablecolor)] hover:border-[var(--Tablecolor)]`}
            >
              All Transactions
            </li>
            <li
              onClick={() =>
                  setInvoiceData({
                    data: invoices.filter((val) => val.isIncome),
                    type: "income",
                  })
              }
             className={`${invoiceData?.type === "income" && " border-b-2  !border-[var(--Tablecolor)] text-[var(--Tablecolor)]"} cursor-pointer transition border-b-2 border-transparent  hover:border-b-2 hover:text-[var(--Tablecolor)] hover:border-[var(--Tablecolor)]`}
            >
              Income
            </li>
            <li
              onClick={() =>
                setInvoiceData({
                  data: invoices.filter((val) => !val.isIncome),
                  type: "expense",
                })
              }
              className={`${invoiceData?.type === "expense" && " border-b-2  !border-[var(--Tablecolor)] text-[var(--Tablecolor)]"} cursor-pointer transition border-b-2 border-transparent hover:border-b-2 hover:text-[var(--Tablecolor)] hover:border-[var(--Tablecolor)]`}
            >
              Expense
            </li>
          </ul>
        </div>
        <Card className="w-[85%] h-auto p-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px] text-[var(--Tablecolor)] pl-11">
                  Invoice
                </TableHead>
                <TableHead className=" text-[var(--Tablecolor)]">
                  Status
                </TableHead>
                <TableHead className=" text-[var(--Tablecolor)]">
                  Transaction ID
                </TableHead>
                <TableHead className=" text-[var(--Tablecolor)]">
                  Method
                </TableHead>
                <TableHead className=" text-[var(--Tablecolor)]">
                  Card
                </TableHead>
                <TableHead className="text-right  text-[var(--Tablecolor)] pr-30">
                  Amount
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoiceData?.data?.map((invoice) => (
                <TableRow key={invoice?.invoice}>
                  <TableCell className="font-medium flex gap-2">
                    <span
                      className={`${invoice?.isIncome ? "rotate-180" : ""}`}
                    >
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="15"
                          cy="15"
                          r="14"
                          transform="rotate(180 15 15)"
                          stroke="#718EBF"
                          stroke-width="2"
                        />
                        <path
                          d="M14.4697 20.0303C14.7626 20.3232 15.2374 20.3232 15.5303 20.0303L20.3033 15.2574C20.5962 14.9645 20.5962 14.4896 20.3033 14.1967C20.0104 13.9038 19.5355 13.9038 19.2426 14.1967L15 18.4393L10.7574 14.1967C10.4645 13.9038 9.98959 13.9038 9.6967 14.1967C9.40381 14.4896 9.40381 14.9645 9.6967 15.2574L14.4697 20.0303ZM14.25 9L14.25 19.5L15.75 19.5L15.75 9L14.25 9Z"
                          fill="#718EBF"
                        />
                      </svg>
                    </span>{" "}
                    {invoice?.invoice}
                  </TableCell>
                  <TableCell>
                    {" "}
                    <Checkbox className="bg-[var(--NavColor)] " />{" "}
                    {invoice.paymentStatus}
                  </TableCell>
                  <TableCell>{invoice.transactionId} </TableCell>
                  <TableCell>{invoice.paymentMethod} </TableCell>
                  <TableCell>{invoice.card} </TableCell>

                  <TableCell
                    className={`text-right ${
                      invoice.isIncome ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {invoice.totalAmount}
                    <Button
                      variant="outline"
                      className="ml-4 text-black rounded-3xl"
                    >
                      Download
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </section>
  );
}

export default Transactions;
