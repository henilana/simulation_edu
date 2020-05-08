#Localization Support

##Introduction

It is increasingly important in today's connected world that applications, web sites etc. support an international user base.  To this end, it is beneficial to have this support built in from the start.  This makes it easier to subsequently adapt the program to a given local target, taking into account language, culture and other regional differences.  Overall this is a process of [internationalization and localization](https://en.wikipedia.org/wiki/Internationalization_and_localization) where the internationalization (sometimes abbreviated to **i18n**) provides the framework for supporting individual localization (**l10n**) tasks, as described in this [Wikipedia article](https://en.wikipedia.org/wiki/Language_localization).

##EduSim i18n and l10n

The EduSim project contains a requirement to support both Left-to-Right (LTR) and Right-to-Left (RTL) layouts and further, to not hard code interface texts.  This implies that at least one LTR and one RTL language should be supported.

Whilst not explicitely stated, it is assumed that English and Hebrew will be the primary LTR and RTL languages respectively, although once internationalization support is implemented, it is relatively simple to incorporate additional languages such as Russian and Amharic (LTR) and Arabic (RTL).

Note that since the scope of the project is relatively limited, the localization requirement is primarily one of [translation](https://en.wikipedia.org/wiki/Translation), not requiring differentiation between different locales such as American English, British English etc.

#Simplified Requirement

##Introduction

Based on the overall project specification and experience gained generally in this area, the following simplified requirements specification is proposed.

##Internationalization Support Requirement

###Selection of Primary User Interface Language
The application shall allow the selection of the primary user interface language in at least one of the following ways:

1.	From a menu selection
2.	From a user profile preferences setting

###Left-to-Right and Right-to-Left Languages

The application shall support a user interface that adjusts texts, layout and other relevant features according to the direction of the primary user interface language direction.

###Tokenization of User Interface Texts

The application shall represent every text via a token such that the token can be used to retrieve the appropriate localized text according to the selected primary interface language.

###Parameterization of User Interface Texts

Texts may be parameterized for example to include a "count" which modifies the text to be presented. This is typically used for plurals, such as "you have 2 attempts" v. "you have 1 attempt" v. "you have no attempts." where a count of 2, 1 or 0 affects both the displayed count (2, 1 or "no") as well as the noun (attempts v. attempt).  See suggested implementation for more details.

###Override of Primary User Interface Language

The application shall allow certain texts to be presented in a language other than the primary user interface language on an individual basis as required.

##Localization Support Requirement

###List of Supported Languages

The application shall maintain a list of the supported primary user interface languages.
For each supported language the following information is required:

1.	ISO 639-1 language code, typically expected to be one of:
	- am (Amharic)
	- ar (Arabic)
	- en (English)
	- he (Hebrew)
	- ru (Russian)
2.	The direction of the language (LTR or RTL)
3.	The name of the language in its own language and character set
4.	The name of the language in all other supported languages in their respective character sets

###List of Localized Texts and Optional Parameterization
The application shall maintain a list of texts in the local language and character set for each token and optional parameters that are required to support application internationalization as described above.

###Retrieval of Alternate Language Texts
The application will allow retrieval of a localized text, parameterized if necessary, in a language other than the primary user interface language.

#Suggested Implementation
##Introduction
This section suggests a possible partial implementation for the above requirements.  In these examples, only English and Hebrew are considered.  Other languages are left as an exercise for the user!

##Fundamental Constants

```javascript
// Language ISO 639-1 codes
const LANGID_en = 'en';
const LANGID_he = 'he';

// Document layout directions
const DOCDIR_lr = 'ltr';
const DOCDIR_rl = 'rtl';
```

##Enumerations

```javascript
// All supported languages
languageIds: {
	en: LANGID_en,
	he: LANGID_he
};

// All supported directions
documentDirections: {
	lr: DOCDIR_lr,
	rl: DOCDIR_rl
};
```

##Configuration

```javascript
// An array with all the supported languages
availableLanguages: [...Object.keys(languageIds)];

// An array with key information about each language
languageData: [
	{ id: LANGID_en,
		intlId: 'lang.name.en', 
		dir: DOCDIR_lr, 
		en: 'English', 
		he: 'אנגלית' 
	},
	{ id: LANGID_he,
		intlId: 'lang.name.he', 
		dir: DOCDIR_rl, 
		en: 'Hebrew', 
		he: 'עברית' 
	}
];

// A helper function to return key information for a given language id
getLanguageRec: function (languageId) {
	return languageData.find(
		langRec => langRec.id === languageId
	);
};
```

##Storage of Localized Texts
###Localized Texts in JSON Format
These files hold the localized text for each token referenced in the application.  The suggested naming convention for tokens will be discussed below.

```javascript
// Example: ./txt/en.json
{
	"locale": "en",
	"messages": {
		"languageset": "ENGLISH",
		"app.name": "EduSim",
		"text.null": " ",
		"menu.item.settings": "Settings",
		"menu.item.settings.language": "Choose language",
		"lang.name.en": "English",
		"lang.name.en:desc:": "Switch to English",
		"lang.name.en:help:": "Select this if you wish to use English as your main language",
		"word.verb.save": "Save",
		"phrase.enterusername": "Enter your user name",
		
		... etc ...
		
		"btn.ok": "OK",
		"btn.cancel": "Cancel",
		"btn.retry": "Retry"
	}
}
```

###Considerations for Localized Texts

1.	Token Naming Convention
	- It is suggested to name tokens using a "dot" notation
	- Tokens can be named according to usage because exact or optimal translations may depend on context.  For example, button texts generally must be kept short.
	- Individual words can be tokenized but because of ambiguity in English particularly the word should be identified as a verb, noun etc.
	- Complete phrases and descriptive texts can also be tokenized however care should be taken to provide translations that more or less occupy the same area on screen.
	- It is suggested to append :desc: and :help: to tokens to provide a short description and more complete help respectively (see "lang.name.en" above).  These can be checked for existence programmatically and displayed if available.
	
2.	Capitalization of Texts
	- In English or other languages in which capitalization is relevant it should be decided how to store translations, for example to always use lower case (excepting proper nouns, abbreviations etc. that always require capitalization)
	
##Loading Text from JSON files

```javascript
// Load texts from relevant file
import msgEN from './txt/en.json';
import msgHE from './txt/he.json';

// Store texts for retrieval by user interface
const TEXTS = {
	[languageIds.en]: msgEN,
	[languageIds.he]: msgHE
};
```

##Changing the Document Direction
This is potentially the easiest action of all to take:

```javascript
// After some action such as a menu selection or user login
// a new locale is determined.
// Use the new locale (e.g. 'he') to retrieve that locale's direction
// from the configuration data
let newDocDir = getLanguageRec(newLocale).dir;

// Simply set the browser document direction thus:
document.documentElement.dir = newDocDir;
```

##Displaying a Localized Text in the User Interface
###Prerequisites: 'react-intl' Package
Install the '[react-intl](https://formatjs.io/docs/react-intl/) ' package using npm or otherwise.

###Implement the `<IntlProvider>` Component
When using the react-intl library, the application must implement the `<IntlProvider>` component for the tree (typically the entire React root).  See the [documentation](https://formatjs.io/docs/react-intl/components/#intlprovider) for more details.

**NOTE:** This is typically only done once in the application.  See "Typical Function Component" section below for implementation details for each and every page.

```javascript
import React from 'react';
import { IntlProvider } from 'react-intl';

export default function AppProvider({ children }) {
	// You will have to know the application state (e.g. 'state' object) including the current locale (e.g. 'en')
	// and the message texts will be loaded into the state.locTxt or similar object.
	return (
		<IntlProvider 
			key={state.locale} 
			defaultLocale={DEFAULTS.locale} 
			locale={state.locale} 
			messages={state.locTxt}
		>
			{children}
		</IntlProvider>
	);
};
```

###Typical Function Component
A simple function component may look like this:

```javascript
import React from 'react';
import { FormattedMessage } from 'react-intl';

export default function AboutThisAppPage() {
	return (
		<h4><FormattedMessage id="app.name" /></h4>
		<p><FormattedMessage id="app.name:desc:" /></p>
	);
}
```

Specific texts can be obtained and used as follows:

```javascript
import { useIntl } from 'react-intl';

const intl = useIntl();

// A (silly) example to get digit names in current language
const ID_Prefix = 'digit';  // prefix for digit.1, digit.2 etc

let count = 0;
let result = '';
while ( count++ < 10 ) {
	let thisDigit = intl.formatMessage({ id: ID_Prefix + '.' + count });
	let result = result + thisDigit + ' ';
}
```

#Summary
Internationalization and Localization is relatively easy to implement.

The most important point is to be organized about tokenizing texts, and methodical about recording them.  A spreadsheet is a good place to keep track of the tokens and their individual translations.

Whilst it is normally a good idea to only translate a given word or phrase once, there may be times when it is more flexible to repeat a translation, for example as a standalone word, as a menu item and as a button caption.  According to context and target language, the same word may be translated differently in each case.

Don't forget that whole paragraphs can be tokenized.  There is no need to limit to sentence, phrase or even word-level translations.

Some translations will need to be parameterized - hopefully more about this later.  Typically it is for plurals since these vary greatly within and between languages.