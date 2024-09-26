"use client";

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Divider,
    Link,
    Image,
    Input,
} from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function ContactPage() {
    const [name, setName] = useState("");

    useEffect(() => {
        console.log("Name changed");
    },[name])

    return (
        <div>
            <h1>Contact</h1>
            <p>Send us a message!</p>

            <Card className="max-w-[400px]">
                <CardHeader className="flex gap-3">
                    <Image
                        alt="nextui logo"
                        height={40}
                        radius="sm"
                        src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                        width={40}
                    />
                    <div className="flex flex-col">
                        <p className="text-md">{name}</p>
                        <p className="text-small text-default-500">
                            nextui.org
                        </p>
                    </div>
                </CardHeader>
                <Divider />
                <CardBody>
                    <p>
                        Make beautiful websites regardless of your design
                        experience.
                    </p>
                </CardBody>
                <Divider />
                <CardFooter>
                    <Link
                        isExternal
                        showAnchorIcon
                        href="https://github.com/nextui-org/nextui"
                    >
                        Visit source code on GitHub.
                    </Link>
                </CardFooter>
            </Card>
            <div className="h-4 w-1/2 mx-auto">
                <Input
                    label="Your name"
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
        </div>
    );
}
