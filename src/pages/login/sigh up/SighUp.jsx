import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../components/ui/tabs";

function SighUp() {
  const [showPassword, setShowPassword] = useState(false);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleRegister = () => {
    if (!user.name || !user.email || !user.password) {
      alert("همه فیلدها را پر کنید");
      return;
    }

    localStorage.setItem("user", JSON.stringify(user));

    alert("ثبت نام با موفقیت انجام شد");
  };

  return (
    <section className="flex justify-center items-center h-[100vh] w-full bg-black">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Tabs defaultValue="account">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>

          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>
                  Create your account information
                </CardDescription>
              </CardHeader>

              <CardContent className="grid gap-6">
                <div className="grid gap-3">
                  <Label>Name</Label>
                  <Input
                    value={user.name}
                    onChange={(e) =>
                      setUser({
                        ...user,
                        name: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="grid gap-3">
                  <Label>Email</Label>
                  <Input
                    type="email"
                    placeholder="m@example.com"
                    value={user.email}
                    onChange={(e) =>
                      setUser({
                        ...user,
                        email: e.target.value,
                      })
                    }
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="password">
            <Card>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>
                  Create your password
                </CardDescription>
              </CardHeader>

              <CardContent className="grid gap-6">
                <div className="grid gap-3">
                  <Label>Password</Label>

                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      value={user.password}
                      onChange={(e) =>
                        setUser({
                          ...user,
                          password: e.target.value,
                        })
                      }
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(!showPassword)
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                    >
                      {showPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex justify-start items-center gap-5">
                <Button onClick={handleRegister}>
                  Register
                </Button>

                <Link to="/">
                  <Button variant="outline">
                    Login
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

export default SighUp;