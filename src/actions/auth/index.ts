"use server";

import { client } from "@/lib/prisma";

export const onCompleteUserRegistration = async (
  fullname: string,
  clerkId: string,
  type: string
) => {
  try {
    const registerd = await client.user.create({
      data: {
        fullname,
        clerkId,
        type,
        subscription: {
          create: {},
        },
      },
      select: {
        fullname: true,
        id: true,
        type: true,
      },
    });

    if (registerd) {
      return { status: 200, user: registerd };
    }
  } catch (error) {
    return { status: 400 };
  }
};
