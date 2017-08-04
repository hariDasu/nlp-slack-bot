# bottie
Simple BotKit bot with NLP

when in a conversation with monimus either in a DM or @monimusbk:

`train monimus`

prompts Monimus to enter training mode


Monimus: 'Sure, what do you want to call this skill? This is the machine name, so pick a good name for a file basename.'

enter a function name which becomes the function that Monimus runs when prompted with keywords

provide some training data which is passed into an NLP classifier

i.e. "when is tea time", "what time do we drink tea"

bot will respond with "between 4pm and 6pm GMT" if this is added as the default response in the empty function created from the training data. essentially the bot dynamically creates an abstract method that needs to be implemented. We can add logic to parse the message and conditionally do whatever we want. For now the demo simply shows how the logistic regression classifier allows a user to type different permutations of the question, such as "when is tea" or "at what time do we usually drink tea" and the bot will recognize that the closest match is to the data entered above and respond with the pre-programmed response.

future thoughts:

- implement npm chrono [http://wanasit.github.io/pages/chrono/]
  - to parse dates such as 'tomorrow' yesterday etc which can be used to fetch data from external sources
- ~~rpc with nltk~~ - completed
  - although Node.js natural does contain MOST functionality ported over from python's NLTK, many features  are missing: for example Natural only allows us to use either Naive Bayes or Logistic regression classifier, which ultimately may be enough for MVP, but in the future we may want to benefit from all of the capabilities of NLTK, such as the vast array of classifiers it offers which may be better based on what our goal is for each function we are running http://www.nltk.org/api/nltk.classify.html






