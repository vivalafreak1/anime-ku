import prisma from "@/libs/prisma";

export async function POST(request) {
  try {
    const { anime_mal_id, user_email, anime_image, anime_title } =
      await request.json();
    const data = {
      anime_mal_id: anime_mal_id.toString(),
      user_email,
      anime_image,
      anime_title,
    };

    const createCollection = await prisma.collection.create({ data });

    if (!createCollection)
      return new Response(JSON.stringify({ isCreated: false }), {
        status: 500,
      });
    else
      return new Response(JSON.stringify({ isCreated: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}

export async function DELETE(request) {
  try {
    const { anime_mal_id, user_email } = await request.json();

    const deleteCollection = await prisma.collection.deleteMany({
      where: {
        anime_mal_id: anime_mal_id.toString(),
        user_email,
      },
    });

    if (deleteCollection.count === 0)
      return new Response(JSON.stringify({ success: false }), { status: 404 });
    else
      return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
