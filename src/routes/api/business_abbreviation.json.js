
import { businessAbbreviationWord } from './business_abbreviation_word';

export async function GET({ params }) {

    return {
        status: 200,
        body: businessAbbreviationWord
    }

}