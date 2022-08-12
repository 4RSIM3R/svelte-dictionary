import { businessNounWords } from "./business_noun_word";

export async function GET({ params }) {

    return {
        status: 200,
        body: businessNounWords
    }

}