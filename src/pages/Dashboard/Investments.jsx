import React from "react";
import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, YAxis, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../../components/ui/chart";

const chartData = [
  { month: "January", desktop: 286 },
  { month: "February", desktop: 445 },
  { month: "March", desktop: 331 },
  { month: "April", desktop: 673 },
  { month: "May", desktop: 239 },
  { month: "June", desktop: 314 },
];
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
};
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
const invoices = [
  
  {
    invoice: "01",
    Name: "Armin",
    Price: "$550",
    Return: "+16%",
    isIncome: true,
    
  },
  {
    invoice: "02",
    Name: "Amin",
    Price: "$200",
    Return: "-6%",
    
  },
  {
    invoice: "03",
    Name: "khodadad",
    Price: "$450",
    Return: "+16%",
    isIncome: true,
  },
  {
    invoice: "04",
    Name: "Parsa  Ghorbanian",
    Price: "$10800",
    Return: "+106%",
   isIncome: true,
  },
  {
    invoice: "05",
    Name: "Ahmad",
    Price: "$600",
    Return: "-25%",
   
  },
 
  
];

function Investments(props) {
  return (
    <section className="w-[100%] h-full bg-[var(--BgColor)]  overflow-x-hidden  pb-10 max-lg:pb-30 ">
      <div className="flex  pt-6 w-full h-auto  justify-center items-center  gap-20 text-[15px] max-lg:flex-col">
        <div className="w-[25%] h-auto flex justify-center items-center bg-white rounded-3xl p-5 max-lg:w-[80%] max-lg:">
          <span className="w-[40%] h-full flex justify-end items-center max-lg:w-[80%] max-lg:justify-center">
            <svg
              width="70"
              height="70"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="25" cy="25" r="25" fill="#DCFAF8" />
              <path
                d="M27.6634 19.9429H29.6324L29.5985 18.7435H27.934L29.4984 15.5105L27.7286 15.3624L26.1741 16.5539L26.6925 15.2065L24.8784 15L24.2834 16.6838L23.3057 15.3801L20.6161 15.2868L22.3958 18.7441L20.7892 18.6924V19.9424H22.3374C19.0356 21.8749 16.6567 26.9263 16.6567 29.6551C16.6567 33.0758 20.3924 35 24.9998 35C29.6073 35 33.343 33.0758 33.343 29.6551C33.3435 26.9263 30.9652 21.8754 27.6634 19.9429ZM25.6975 31.2961V32.4803H24.5592V31.3774C23.7812 31.3435 23.0262 31.1329 22.585 30.8784L22.9334 29.5205C23.4209 29.788 24.1066 30.031 24.8611 30.031C25.5229 30.031 25.976 29.7755 25.976 29.3119C25.976 28.8692 25.6047 28.5902 24.7454 28.3008C23.5023 27.8831 22.6549 27.3017 22.6549 26.1764C22.6549 25.1544 23.375 24.3523 24.6176 24.1093V23.0059H25.7559V24.028C26.5334 24.0635 27.0569 24.2246 27.4397 24.4108L27.1028 25.7233C26.8009 25.596 26.2664 25.328 25.4306 25.328C24.6755 25.328 24.4315 25.6529 24.4315 25.9777C24.4315 26.3615 24.8382 26.605 25.8253 26.9768C27.2066 27.466 27.7645 28.1032 27.7645 29.1492C27.7651 30.1812 27.033 31.064 25.6975 31.2961Z"
                fill="#16DBCC"
              />
            </svg>
          </span>
          <div className="w-[60%] flex flex-col justify-center items-center h-full max-lg:w-[80%]">
            <p className="text-[var(--Tablecolor)]">Total Invested Amount</p>
            <p className="text-2xl">$150,000</p>
          </div>
        </div>
        <div className="w-[25%] h-auto flex justify-center items-center bg-white rounded-3xl p-5 max-lg:w-[80%] ">
          <span className="w-[40%] h-full flex justify-end items-center max-lg:w-[80%] max-lg:justify-center">
           <svg width="70" height="70" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="25" cy="25" r="25" fill="#FFE0EB"/>
<g clip-path="url(#clip0_152_1513)">
<path d="M25.5862 25.5855V15C19.9162 15.2974 15.2981 19.9154 15.0007 25.5855H25.5862ZM23.2426 23.8278H22.0708V22.6559H23.2426V23.8278ZM19.7271 20.3123H20.8989V21.4841H19.7271V20.3123ZM22.6567 20.0697L23.4852 20.8982L20.313 24.0704L19.4845 23.2418L22.6567 20.0697Z" fill="#FF82AC"/>
<path d="M25.586 26.7573H18.5774C18.8629 30.4914 21.852 33.4804 25.5861 33.766V26.7573H25.586Z" fill="#FF82AC"/>
<path d="M26.7578 17.3438C26.7578 17.4696 26.7578 35.1376 26.7578 34.9993C31.3308 34.6956 34.9997 30.7616 34.9997 26.113C34.9997 21.464 31.3319 17.6464 26.7578 17.3438ZM30.2733 25.5856C31.2426 25.5856 32.031 26.3741 32.031 27.3433C32.031 28.1062 31.5397 28.7505 30.8592 28.9932V30.2729H29.6874V28.9932C29.0069 28.7505 28.5156 28.1062 28.5156 27.3433H29.6874C29.6874 27.6666 29.95 27.9293 30.2733 27.9293C30.5966 27.9293 30.8592 27.6666 30.8592 27.3433C30.8592 27.0201 30.5966 26.7574 30.2733 26.7574C29.304 26.7574 28.5156 25.9689 28.5156 24.9997C28.5156 24.2368 29.0069 23.5926 29.6874 23.3499V22.0701H30.8592V23.3499C31.5397 23.5926 32.031 24.2368 32.031 24.9997H30.8592C30.8592 24.6764 30.5966 24.4138 30.2733 24.4138C29.95 24.4138 29.6874 24.6764 29.6874 24.9997C29.6874 25.323 29.95 25.5856 30.2733 25.5856Z" fill="#FF82AC"/>
</g>
<defs>
<clipPath id="clip0_152_1513">
<rect width="20" height="20" fill="white" transform="translate(15 15)"/>
</clipPath>
</defs>
</svg>

          </span>
          <div className="w-[60%] flex flex-col justify-center items-center h-full  max-lg:w-[80%]">
            <p className="text-[var(--Tablecolor)]">Number of Investments</p>
            <p className="text-2xl">1,270</p>
          </div>
        </div>

        <div className="w-[25%] h-auto flex justify-center items-center bg-white rounded-3xl p-5 max-lg:w-[80%]">
          <span className="w-[40%] h-full flex justify-end items-center max-lg:w-[80%] max-lg:justify-center">
            <svg
              width="70"
              height="70"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="25" cy="25" r="25" fill="#E7EDFF" />
              <g clip-path="url(#clip0_152_1534)">
                <path
                  d="M34.8174 18.9334L31.0675 15.1835C30.8887 15.0048 30.62 14.951 30.3863 15.0485C30.1525 15.146 30 15.3723 30 15.6248V17.4997H21.8753C18.0779 17.4997 15.0005 20.5771 15.0005 24.3745C15.0005 24.7195 15.2805 24.9995 15.6255 24.9995H18.1254C18.4704 24.9995 18.7504 24.7195 18.7504 24.3745C18.7504 22.6483 20.1491 21.2496 21.8753 21.2496H30V23.1245C30 23.377 30.1525 23.6058 30.3863 23.702C30.62 23.7995 30.8887 23.7458 31.0675 23.567L34.8174 19.8171C35.0611 19.5734 35.0611 19.1772 34.8174 18.9334Z"
                  fill="#396AFF"
                />
                <path
                  d="M34.3747 24.9995H31.8748C31.5298 24.9995 31.2498 25.2795 31.2498 25.6245C31.2498 27.3507 29.8511 28.7494 28.1249 28.7494H20.0002V26.8745C20.0002 26.622 19.8477 26.3932 19.6139 26.297C19.3802 26.2007 19.1127 26.2545 18.9327 26.4332L15.1828 30.1831C14.9391 30.4269 14.9391 30.8231 15.1828 31.0668L18.9327 34.8167C19.1114 34.9955 19.3802 35.0492 19.6139 34.9517C19.8477 34.8542 20.0002 34.6267 20.0002 34.3742V32.4993H28.1249C31.9223 32.4993 34.9997 29.4219 34.9997 25.6245C34.9997 25.2795 34.7197 24.9995 34.3747 24.9995Z"
                  fill="#396AFF"
                />
              </g>
              <defs>
                <clipPath id="clip0_152_1534">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(15 15)"
                  />
                </clipPath>
              </defs>
            </svg>
          </span>
          <div className="w-[60%] flex flex-col justify-center items-center h-full  max-lg:w-[80%]">
            <p className="text-[var(--Tablecolor)]">Rate of Return</p>
            <p className="text-2xl">+5.80%</p>
          </div>
        </div>
      </div>

      <div className="w-full h-auto flex justify-center items-center pt-10 gap-20  max-lg:flex-col ">
        <div className="w-[40%] flex-col gap-4 flex max-lg:w-[95%]">
          <h2 className=" text-2xl">Yearly Total Investment</h2>
          <Card className="w-full h-full">
            <CardContent className="w-full h-70">
              <ChartContainer config={chartConfig} className="w-full h-full">
                <LineChart
                  accessibilityLayer
                  data={chartData}
                  margin={{
                    left: 12,
                    right: 12,
                  }}
                >
                  <CartesianGrid vertical={false} />

                  <XAxis
                    dataKey="month"
                    tickMargin={8}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Line
                    dataKey="desktop"
                    type="linear"
                    stroke="var(--color-desktop)"
                    strokeWidth={2}
                  />
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
        <div className="w-[40%] flex-col gap-4 flex max-lg:w-[95%]">
          <h2 className=" text-2xl">Monthly Revenue</h2>
          <Card className="w-full h-full">
            <CardContent className="w-full h-70">
              <ChartContainer config={chartConfig} className="w-full h-full">
                <LineChart
                  accessibilityLayer
                  data={chartData}
                  margin={{
                    left: 12,
                    right: 12,
                  }}
                >
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickMargin={8}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Line
                    dataKey="desktop"
                    type="natural"
                    stroke="var(--color-desktop)"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="flex justify-center gap-10 items-center pt-10 w-full h-auto max-lg:flex-col ">
        <div className=" flex-col  flex gap-4 w-[53%] max-lg:w-[95%] ">
          <h2 className="text-2xl">My Investment</h2>
          <Table className="w-full h-auto gap-5 flex-col flex ">
            <TableBody className="bg-white w-full rounded-3xl flex justify-start items-center ">
              <TableCell className="w-[20%]">
                <span>
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="60" height="60" rx="20" fill="#FFE0EB" />
                    <path
                      d="M39.6167 37.4826C39.2386 38.356 38.7911 39.16 38.2726 39.8992C37.5658 40.9069 36.9871 41.6044 36.5411 41.9917C35.8498 42.6275 35.1091 42.9531 34.3159 42.9716C33.7465 42.9716 33.0597 42.8096 32.2604 42.4809C31.4584 42.1537 30.7214 41.9917 30.0475 41.9917C29.3407 41.9917 28.5827 42.1537 27.772 42.4809C26.9599 42.8096 26.3058 42.9809 25.8056 42.9979C25.045 43.0303 24.2869 42.6954 23.5301 41.9917C23.0471 41.5704 22.443 40.8482 21.7192 39.8251C20.9427 38.7325 20.3043 37.4656 19.8041 36.0212C19.2685 34.4611 19 32.9503 19 31.4877C19 29.8123 19.362 28.3673 20.0872 27.1564C20.6571 26.1837 21.4152 25.4165 22.3641 24.8532C23.313 24.29 24.3383 24.0029 25.4424 23.9846C26.0466 23.9846 26.8388 24.1714 27.8233 24.5387C28.8051 24.9072 29.4355 25.0941 29.7119 25.0941C29.9185 25.0941 30.6188 24.8756 31.8059 24.44C32.9286 24.036 33.8761 23.8687 34.6523 23.9346C36.7556 24.1043 38.3358 24.9334 39.3867 26.4272C37.5056 27.567 36.5751 29.1634 36.5936 31.2113C36.6106 32.8065 37.1893 34.1339 38.3266 35.1879C38.842 35.6771 39.4176 36.0552 40.058 36.3237C39.9191 36.7264 39.7725 37.1123 39.6167 37.4826V37.4826ZM34.7927 18.5001C34.7927 19.7504 34.3359 20.9178 33.4255 21.9983C32.3268 23.2829 30.9978 24.0251 29.5566 23.908C29.5373 23.7508 29.5276 23.5926 29.5276 23.4342C29.5276 22.234 30.0501 20.9494 30.978 19.8992C31.4413 19.3674 32.0305 18.9252 32.7449 18.5725C33.4579 18.2251 34.1323 18.0329 34.7665 18C34.785 18.1671 34.7927 18.3343 34.7927 18.5001V18.5001Z"
                      fill="#FF82AC"
                    />
                  </svg>
                </span>
              </TableCell>
              <TableCell className="w-[30%]">
                <p className="text-[16px]">Apple Store</p>
                <p className="text-[var(--Tablecolor)]">
                  E-commerce, Marketplace
                </p>
              </TableCell>
              <TableCell className="w-[30%] max-lg:hidden">
                <p className="text-[16px]">$54,000</p>
                <p className="text-[var(--Tablecolor)]">Envestment Value</p>
              </TableCell>
              <TableCell className="flex-col justify-center items-center w-[20%] max-lg:w-[60%] max-lg:pl-25">
                <p className="text-[16px] text-green-500">+16%</p>
                <p className="text-[var(--Tablecolor)]">Return Value</p>
              </TableCell>
            </TableBody>
            <TableBody className="bg-white w-full rounded-3xl flex justify-start items-center">
              <TableCell className="w-[20%]">
                <span>
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="60" height="60" rx="20" fill="#E7EDFF" />
                    <path
                      d="M42.5021 30.7851C42.5032 29.9333 42.4311 29.083 42.2868 28.2435H30.499V33.0576H37.2505C37.1124 33.8265 36.82 34.5594 36.3909 35.2122C35.9619 35.8651 35.4051 36.4243 34.7541 36.8561V39.981H38.7835C41.1428 37.8057 42.5021 34.5888 42.5021 30.7851Z"
                      fill="#4471FF"
                    />
                    <path
                      d="M30.4991 43C33.8722 43 36.7124 41.8924 38.7835 39.9827L34.7542 36.8578C33.6327 37.6182 32.1883 38.0523 30.4991 38.0523C27.2388 38.0523 24.4715 35.8544 23.482 32.8927H19.3311V36.1131C20.3714 38.1833 21.9667 39.9236 23.9388 41.1397C25.9109 42.3558 28.1822 42.9999 30.4991 43Z"
                      fill="#4471FF"
                    />
                    <path
                      d="M23.4819 32.8926C22.9587 31.3407 22.9587 29.66 23.4819 28.1081V24.8877H19.331C18.4558 26.6292 18 28.5513 18 30.5004C18 32.4494 18.4558 34.3715 19.331 36.113L23.4819 32.8926Z"
                      fill="#4471FF"
                    />
                    <path
                      d="M30.4991 22.9486C32.2816 22.9195 34.0041 23.593 35.2941 24.8235L38.8617 21.2559C36.5994 19.1311 33.6025 17.9646 30.4991 18.0008C28.1822 18.0009 25.9109 18.645 23.9388 19.8611C21.9667 21.0772 20.3714 22.8175 19.3311 24.8877L23.482 28.1081C24.4715 25.1464 27.2388 22.9486 30.4991 22.9486Z"
                      fill="#4471FF"
                    />
                  </svg>
                </span>
              </TableCell>
              <TableCell className="w-[30%]">
                <p className="text-[16px]">Samsung Mobile</p>
                <p className="text-[var(--Tablecolor)]">
                  E-commerce, Marketplace
                </p>
              </TableCell>
              <TableCell className="w-[30%] max-lg:hidden">
                <p className="text-[16px]">$25,000</p>
                <p className="text-[var(--Tablecolor)]">Envestment Value</p>
              </TableCell>
              <TableCell className="flex-col justify-center items-center w-[20%] max-lg:w-[60%] max-lg:pl-25">
                <p className="text-[16px] text-red-500">-5%</p>
                <p className="text-[var(--Tablecolor)]">Return Value</p>
              </TableCell>
            </TableBody>
            <TableBody className="bg-white w-full rounded-3xl flex justify-start items-center">
              <TableCell className="w-[20%]">
                <span>
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="60" height="60" rx="20" fill="#FFF5D9" />
                    <path
                      d="M29.555 42.9999L33.0675 23.2457C36.4155 23.2457 37.4715 23.6129 37.624 25.1114C37.624 25.1114 39.8699 24.274 41.0027 22.5732C36.5823 20.5249 32.1409 20.4325 32.1409 20.4325L29.5492 23.5891L29.555 23.5887L26.9634 20.432C26.9634 20.432 22.5218 20.5245 18.1021 22.5728C19.2338 24.2736 21.4806 25.111 21.4806 25.111C21.634 23.6124 22.6887 23.2453 26.0143 23.2429L29.555 42.9999Z"
                      fill="#FFBB38"
                    />
                    <path
                      d="M29.5536 19.5208C33.1268 19.4935 37.2168 20.0735 41.4037 21.8984C41.9633 20.8912 42.1071 20.446 42.1071 20.446C37.5302 18.6352 33.244 18.0155 29.5531 18C25.8623 18.0155 21.5763 18.6353 17 20.446C17 20.446 17.2042 20.9943 17.703 21.8984C21.8891 20.0735 25.9797 19.4935 29.5531 19.5208H29.5536Z"
                      fill="#FFBB38"
                    />
                  </svg>
                </span>
              </TableCell>
              <TableCell className="w-[30%]">
                <p className="text-[16px]">Tesla Motors</p>
                <p className="text-[var(--Tablecolor)]">Electric Vehicles</p>
              </TableCell>
              <TableCell className="w-[30%] max-lg:hidden">
                <p className="text-[16px]">$8,000</p>
                <p className="text-[var(--Tablecolor)]">Envestment Value</p>
              </TableCell>
              <TableCell className="flex-col justify-center items-center w-[20%] max-lg:w-[60%] max-lg:pl-25 ">
                <p className="text-[16px] text-green-500">+8%</p>
                <p className="text-[var(--Tablecolor)]">Return Value</p>
              </TableCell>
            </TableBody>
          </Table>
        </div>

        <div className="flex-col  flex gap-4 w-[30%] max-lg:w-[95%]">
          <h2 className="text-2xl">Trending Stock</h2>
          <div className=" ">
            <Card>
              <Table className="w-full h-auto flex-col">
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-[var(--Tablecolor)]">
                      <p>SL No</p>
                    </TableHead>
                    <TableHead className="text-[var(--Tablecolor)]">
                      <p>Name</p>
                    </TableHead>
                    <TableHead className="text-[var(--Tablecolor)]">
                      <p>Price</p>
                    </TableHead>
                    <TableHead className="text-[var(--Tablecolor)]">
                      <p>Return</p>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                {invoices.map((invoice) => (
                <TableBody >
                  <TableCell>
                    {invoice?.invoice}
                  </TableCell>
                  <TableCell>
                    {invoice.Name}
                  </TableCell>
                  <TableCell>
                    {invoice.Price}
                  </TableCell>
                  <TableCell className={`text-right ${invoice.isIncome ? "text-green-600" : "text-red-600"}`}>
                    {invoice.Return}
                  </TableCell>
                </TableBody>
                ))}
              </Table>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Investments;
