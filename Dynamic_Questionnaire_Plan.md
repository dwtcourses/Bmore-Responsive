# Dynamic Questionnaire Plan
We need a system to be able to create a dynamic questionnaire system to be able to ideally accommodate any entity. Being able to provide a few static questionnaires may be able to help in receiving responses in the short term, however, as there are many different entities in play at our system, a dynamic system of questionnaire would allow for any type of questionnaire to be created to fit the exact needs of each entity.

## How will we do this?
- Create a Questionnaire model. (What fields would be useful to have in a Questionnaire object?)
- Create a Question model. (What fields would be useful to have in Question object? Also a Questionnaire object would contain many Question objects.)
- Create the desired Questionnaire endpoints:
    - Create
    - Retrieve
    - Update
    - Delete
    - Not sure if we'll need any others.

## Questionnaire Model
This is the current idea I have created that will represent a Questionnaire object:
```
{
  "questionnaire": {
    "id": "sample_questionnaire_id",
    "title": "sample_questionnaire_title",
    "questionMapping": [
      {
        "type": "radio",
        "options": ["option1", "option2", "option3"],
        "text": "what option do you want to choose?",
        "required": true
      },
      {
        "type": "shortanswer",
        "text": "what is the short answer to the question?",
        "required": true
      },
      {
        "type": "longanswer",
        "text": "what is the long answer to the question?",
        "required": true
      }
    ]
  }
}
```
- Any further fields that would be useful to add in the Questionnaire/Question objects? Possibly a response field in each Question?
- Should Questionnaires be made and associated to particular entities? Should we have baseline template Questionnaires that entities can use and add custom questions to if necessary?
- Should we allow for Questionnaires to have states? (template, open, completed, etc.) (template would be empty Questionnaires that users are able to pull from the database to fill out.)

## Logic Flow
*This does not have to stay this way, this is only the solution that I came up with after given this task*
- User fills out a create form on the front end that builds the Questionnaire object similar to the one above.
- When the user submits, each Question object is sent through a processor and is modified into a format recognizable by this library that can take a JSON object and 
turn it into a frontend form: https://vuejsexamples.com/generate-a-form-using-json-schema-and-vue-js/
- The Questionnaire object is then stored in the database.
- Users can perform GET calls on the Questionnaire to fill one out. (needs to be a distinction between a completed Questionnaire and a Questionnaire that is to be filled out.)

## Main Focus
I believe the main focus on this should be how we can best design the Questionnaires. I also think more feedback from the entities that are using the initial solution we create for the Questionnaires will be a good guide for us to base our design off of.


    