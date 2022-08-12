import { businessVerbWords } from './business_verb_word';

export async function GET({ params }) {

    return {
        status: 200,
        body: businessVerbWords
    }

}