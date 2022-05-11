export interface DictEntry {
    head: Head; //Result header (not used)
    def:  Def[]; //Array of dictionary entries
}

export interface Def {
    text: string; //Word entry
    pos:  string; //Part of speech (noun/adj/etc)
    tr:   Tr[]; //Array of translations
}

export interface Tr {
    text: string; //Text of translation
    pos:  string; //Translated part of speech
    syn:  Mean[]; //Array of synonyms
    mean: Mean[]; //Array of meanings
    ex:   Ex[]; //Array of examples
}

export interface Ex {
    text: string; //Example text
    tr:   Mean[]; //Translated array of meanings
}

export interface Mean {
    text: string; //Meaning text
}

export interface Head {
}
