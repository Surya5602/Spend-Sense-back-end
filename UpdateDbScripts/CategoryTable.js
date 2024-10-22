import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const Categories = {
    "income": {
        "Financial income": [
            { "name": "Financial income", "image": "https://res.cloudinary.com/dqvb4pnky/image/upload/v1724043675/ic_bank_if9dvq.svg" }
        ],
        "Income": [
            { "name": "Salary", "image": "https://res.cloudinary.com/dqvb4pnky/image/upload/v1724044435/ic_workbag_mm9srd.svg" },
            { "name": "Odd jobs", "image": "https://res.cloudinary.com/dqvb4pnky/image/upload/v1724044450/ic_tools_mk1npw.svg" },
            { "name": "Pension", "image": "https://res.cloudinary.com/dqvb4pnky/image/upload/v1724044466/ic_old_man_tox3pn.svg" }
        ],
        "Other(Income)": [
            { "name": "Other (Income)", "image": "https://res.cloudinary.com/dqvb4pnky/image/upload/v1724044483/ic_sheet_green_jm2m7w.svg" },
            { "name": "Personal savings", "image": "https://res.cloudinary.com/dqvb4pnky/image/upload/v1724044500/ic_piggy_bank_li5hgx.svg" }
        ],
        "image": {
            "Financial income": "https://res.cloudinary.com/dqvb4pnky/image/upload/v1724043675/ic_bank_if9dvq.svg",
            "Income": "https://res.cloudinary.com/dqvb4pnky/image/upload/v1724044420/ic_base_incomes_yjqlei.svg",
            "Other(Income)": "https://res.cloudinary.com/dqvb4pnky/image/upload/v1724044483/ic_sheet_green_jm2m7w.svg"
        }
    },
    "expense": {
        "Food/Drinks": [
            { "name": "Food/Drinks", "image": "https://res.cloudinary.com/dqvb4pnky/image/upload/v1724044924/ic_shopping_cart_hmvok3.svg" },
            { "name": "Eating out", "image": "https://res.cloudinary.com/dqvb4pnky/image/upload/v1724048099/ic_plate_fork_knife_vjbzxr.svg" },
            { "name": "Bar", "image": "https://res.cloudinary.com/dqvb4pnky/image/upload/v1724048103/ic_cup_n8zdtp.svg" }
        ],
        "Shopping": [
            { "name": "Shopping", "image": "https://res.cloudinary.com/dqvb4pnky/image/upload/v1724044931/ic_base_shopping_qpdkmu.svg" },
            { "name": "Clothing", "image": "https://res.cloudinary.com/dqvb4pnky/image/upload/v1724048034/ic_t_shirt_e8m6jq.svg" },
            { "name": "Shoes", "image": "https://res.cloudinary.com/dqvb4pnky/image/upload/v1724048055/ic_shoe_zdzkeo.svg" },
            { "name": "Technology", "image": "https://res.cloudinary.com/dqvb4pnky/image/upload/v1724048069/ic_hard_drive_udqraw.svg" },
            { "name": "Gifts", "image": "https://res.cloudinary.com/dqvb4pnky/image/upload/v1724048087/ic_gift_ngapmy.svg" }
        ],
        "Transportation": [
            { "name": "Transportation", "image": "https://res.cloudinary.com/dqvb4pnky/image/upload/v1724044944/ic_coach_ivsutq.svg" },
            { "name": "Car", "image": "https://res.cloudinary.com/dqvb4pnky/image/upload/v1724047935/ic_car_nuycpp.svg" },
            { "name": "Fuel", "image": "https://res.cloudinary.com/dqvb4pnky/image/upload/v1724047959/ic_fuel_uxfkeg.svg" },
            { "name": "Insurance", "image": "https://res.cloudinary.com/dqvb4pnky/image/upload/v1724047962/ic_umbrella_wmrh7n.svg" }
        ],
        "Entertainment": [
            { "name": "Entertainment", "image": "https://res.cloudinary.com/dqvb4pnky/image/upload/v1724044961/ic_party_hat_m0u1ou.svg" },
            { "name": "Books/Magazines", "image": "https://res.cloudinary.com/dqvb4pnky/image/upload/v1724047879/ic_journal_xye7ix.svg" }
        ],
        "Home": [
            { "name": "Home", "image": "https://res.cloudinary.com/dqvb4pnky/image/upload/v1724044975/ic_home_aqbaj8.svg" },
            { "name": "Rent", "image": "https://res.cloudinary.com/dqvb4pnky/image/upload/v1724047788/ic_house_rent_zcodky.svg" },
            { "name": "Energy bill", "image": "https://res.cloudinary.com/dqvb4pnky/image/upload/v1724047766/ic_power_cord_pttcyp.svg" },
            { "name": "Water bill", "image": "https://res.cloudinary.com/dqvb4pnky/image/upload/v1724047784/ic_water_drop_bdhekm.svg" },
            { "name": "Garbage bill", "image": "https://res.cloudinary.com/dqvb4pnky/image/upload/v1724047841/ic_garbage_bin_g63yzy.svg" }
        ],
        "Family": [
            { "name": "Family", "image": "https://res.cloudinary.com/dqvb4pnky/image/upload/v1724044999/ic_family_dpreur.svg" },
            { "name": "Children", "image": "https://res.cloudinary.com/dqvb4pnky/image/upload/v1724047656/ic_pacifier_udlcra.svg" },
            { "name": "Instruction", "image": "https://res.cloudinary.com/dqvb4pnky/image/upload/v1724047661/ic_board_rwfaxb.svg" }
        ],
        "Health/Sport": [
            { "name": "Health", "image": "https://res.cloudinary.com/dqvb4pnky/image/upload/v1724045016/ic_base_health_hw49wx.svg" },
            { "name": "Sport", "image": "https://res.cloudinary.com/dqvb4pnky/image/upload/v1724046746/ic_weights_ci2olz.svg" }
        ],
        "Pets": [
            { "name": "Pets", "image": "https://res.cloudinary.com/dqvb4pnky/image/upload/v1724045040/ic_footprint_xiq5xp.svg" },
            { "name": "Food - Pets", "image": "https://res.cloudinary.com/dqvb4pnky/image/upload/v1724045613/ic_base_pet_food_jjfk6e.svg" }
        ],
        "Travels": [
            { "name": "Travels", "image": "https://res.cloudinary.com/dqvb4pnky/image/upload/v1724045069/ic_plane_rlmdqy.svg" },
            { "name": "Accommodation", "image": "https://res.cloudinary.com/dqvb4pnky/image/upload/v1724045549/ic_bed_krpwkp.svg" },
            { "name": "Transportation - Travels", "image": "https://res.cloudinary.com/dqvb4pnky/image/upload/v1724044944/ic_coach_ivsutq.svg" }
        ],
        "Other (Expenses)": [
            { "name": "Other (Expenses)", "image": "https://res.cloudinary.com/dqvb4pnky/image/upload/v1724045096/ic_sheet_red_hfj1qd.svg" },
            { "name": "Taxes", "image": "https://res.cloudinary.com/dqvb4pnky/image/upload/v1724045505/ic_courthouse_ynvshv.svg" }
        ],
        "image": {
            "Food/Drinks": "https://res.cloudinary.com/dqvb4pnky/image/upload/v1724044924/ic_shopping_cart_hmvok3.svg",
            "Shopping": "https://res.cloudinary.com/dqvb4pnky/image/upload/v1724044931/ic_base_shopping_qpdkmu.svg",
            "Transportation": "https://res.cloudinary.com/dqvb4pnky/image/upload/v1724044944/ic_coach_ivsutq.svg",
            "Entertainment": "https://res.cloudinary.com/dqvb4pnky/image/upload/v1724044961/ic_party_hat_m0u1ou.svg",
            "Home": "https://res.cloudinary.com/dqvb4pnky/image/upload/v1724044975/ic_home_aqbaj8.svg",
            "Family": "https://res.cloudinary.com/dqvb4pnky/image/upload/v1724044999/ic_family_dpreur.svg",
            "Health/Sport": "https://res.cloudinary.com/dqvb4pnky/image/upload/v1724045016/ic_base_health_hw49wx.svg",
            "Pets": "https://res.cloudinary.com/dqvb4pnky/image/upload/v1724045040/ic_footprint_xiq5xp.svg",
            "Travels": "https://res.cloudinary.com/dqvb4pnky/image/upload/v1724045069/ic_plane_rlmdqy.svg",
            "Other (Expenses)": "https://res.cloudinary.com/dqvb4pnky/image/upload/v1724045096/ic_sheet_red_hfj1qd.svg"
        }
    }
};

Object.keys(Categories).forEach(async (expenseTypeKey) => {
    let subCategories = null
    let subCategoryName = null
    let subCategoryImage = null
    let createV = null
    const type = expenseTypeKey
    const categoriesKeys = Object.keys(Categories[type]);
    for (let i = 0; i < categoriesKeys.length - 1; i++) {
        const category = categoriesKeys[i];
        const categoryImage = Categories[type]["image"][category]
        console.log("Addd : ", category)
        createV = await prisma.category.create({
            data: {
                name: category,
                type: type,
                picture: categoryImage || ""
            }
        })

        subCategories = Categories[type][category]
        for (let i = 0; i < subCategories.length; i++) {
            const subCategory = subCategories[i];
            subCategoryName = subCategory.name || ""
            subCategoryImage = subCategory.image || ""
            await prisma.subCategory.create({
                data: {
                    name: subCategoryName,
                    picture: subCategoryImage,
                    categoryId: createV.id,
                }
            })
        }
        console.log("category updated successfully", createV)
    }
})