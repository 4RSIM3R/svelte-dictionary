import { businessVerbsWords } from "./business_verbs_word";

export async function GET({ params }) {

    return {
        status: 200,
        body: businessVerbsWords
    }

}