import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';
import fs from 'node:fs';
import { resolve } from 'node:path';
const db = sql('meals.db');

export async function getMeals(params) {
    // await new Promise((resolve) => setTimeout(resolve, 2000));
    // throw new Error('Loading meals failed');
    return await db.prepare('SELECT * FROM meals').all();
};

export function getMeal(slug) {
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
};

export async function saveMeal(meal) {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    meal.slug = slugify(meal.title, { lover: true });
    meal.instructions = xss(meal.instructions);
    const extension = meal.image.name.split('.').pop();
    const fileName = `${meal.slug}.${extension}`;

    const stream = fs.createWriteStream(`public/images/${fileName}`);
    const bufferedImage = await meal.image.arrayBuffer();

    stream.write(Buffer.from(bufferedImage), (error) => {
        if (error) {
            throw new Error('Saving image failed!');
        }
    });

    meal.image = `/images/${fileName}`;

    db.prepare(`
        INSERT INTO meals
            (title, summary, instructions, creator, creator_email, image, slug)
        VALUES  (
            @title,
            @summary,
            @instructions,
            @creator,
            @creator_email,
            @image,
            @slug
        )    
    `).run(meal);

    // return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
};
