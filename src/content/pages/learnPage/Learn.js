import React, { useState, useEffect } from 'react'
import { Button, Grid, Header, List } from 'semantic-ui-react'
import PageItem from '../../PageItem'
import PageCard from '../../PageCard'
import PageModal from '../../PageModal'
import articleText from './articleText.json'
import waterImage from './images/water.jpeg'
import sleepImage from './images/sleep.jpeg'
import buffChickImage from './images/buffaloChicken.jpeg'
import dumplingImage from './images/dumplings.jpeg'
import boxingImage from './images/boxing.jpeg'
import hiitImage from './images/Hiit.jpeg'
import meditationImage from './images/meditation.jpeg'
import chickpeaImage from './images/chickpea.jpeg'
import yogaImage from './images/yoga.jpeg'

const improveSleep = 'How to improve your sleep'
const howMuchWater = 'How much Water should you drink'
const buffChickSan = 'Buffalo Chicken Sandwich'
const brocChedSoup = 'Broccoli Cheddar Soup Dumplings'
const boxingTraining = 'Boxing Training Workout'
const hiitWorkout = '20 Minute HIIT Workout'
const meditationBenefits = 'The Benefits of Meditation for Stress Reduction'
const chickpeaStir = 'Chickpea and Vegetable Stir-Fry'
const yoga = 'Yoga for Beginners'

const ArticleButton = ({ onClick }) => {
    return (<Button fluid onClick={onClick}>Open Article</Button>)
}

const Article = ({ name, content }) => {
    return (
        <Header>
            {content}
            {name === chickpeaStir && (<List>
                Ingredients
                <br>
                </br>
                1. chickpeas
                <br>
                </br>
                2. tamari or soy sauce
                <br>
                </br>
                3. onion
                <br>
                </br>
                4. red bell pepper
                <br>
                </br>
                5. mushrooms
                <br>
                </br>
                6. green onion
                <br>
                </br>
                7. red pepper flakes
                <br>
                </br>
                8. ginger
                <br>
                </br>
                9. garlic
                <br>
                </br>
                Steps
                <br>
                </br>
                1. First marinate the chickpeas in a little tamari for added flavor.
                <br>
                </br>
                2. Next mix together the ingredients for the sauce and set it aside.
                <br>
                </br>
                3. Then stir fry the vegetables in a few tablespoons of water.
                <br>
                </br>
                4. Add in the chickpeas and sauce and stir until everything is hot and the sauce has thickened.

            </List>)}
            {name === buffChickSan && (<List>
            Ingredients
                <br>
                </br>
            1. 4 boneless skinless chicken breasts
                <br>
                </br>
            2. 1 bottle of Franks RedHot® Buffalo Wings Hot Sauce
                <br>
                </br>
            3. 1/4 cup of blue cheese
                <br>
                </br>
            4. 4 kaiser rolls
                <br>
                </br>
            5. lettuce
                <br>
                </br>
            6. tomato slices
                <br>
                </br>
            7. onion
                <br>
                </br>
            Steps
                <br>
                </br>
            1. Place chicken and 1/2 of the RedHot Buffalo Wings Sauce in a large resealable plastic bag.
                <br>
                </br>
            2. Refrigerate 30 minutes or up to 3 hours for more flavor
                <br>
                </br>
            3. Mix remaining 1/2 bottle of the Buffalo Wings Sauce and blue cheese dressing in medium bowl.
                <br>
                </br>
            4. Remove chicken from marinade, Grill chicken 6 to 8 minutes per side or until cooked through.
                <br>
                </br>
            5. Spread 2 tablespoons of blue cheese sauce mixture on top and bottom of each roll.
                <br>
                </br>
            6. Place chicken on the roll
                <br>
                </br>
            7. Add lettuce, tomato, and onion, if desired.
            </List>)}
            {name === brocChedSoup && (<List>
                Ingredients
                <br>
                </br>
                1. 2 tablespoons olive oil
                <br>
                </br>
                2. 3 tablespoons butter
                <br>
                </br>
                3. onion
                <br>
                </br>
                4. 4 cups fresh broccoli florets
                <br>
                </br>
                5. 7 cups chicken stock
                <br>
                </br>
                6. 1 cup heavy whipping cream
                <br>
                </br>
                7. 4 cups grated cheddar cheese
                <br>
                </br>
                8. 1 teaspoon garlic powder
                <br>
                </br>
                9. salt and pepper
                10. 1 teaspoon dried thyme
                <br>
                </br>
                11. 3 carrots, peeled and sliced
                <br>
                </br>
                12. 2 celery stalks
                <br>
                </br>
                Dumplings
                <br>
                </br>
                1.1 ½ cups all purpose flour
                <br>
                </br>
                2. 1 cup buttermilk
                <br>
                </br>
                3. 2 teaspoons baking powder
                <br>
                </br>
                4. ½ cup grated parmesan cheese
                <br>
                </br>
                5. 1/2 teaspoon salt
                <br>
                </br>
                6. 1/2 teaspoon garlic powder
                <br>
                </br>
                7. 1/2 teaspoon dried sage
                <br>
                </br>
                Steps
                <br>
                </br>
                1. In a large pot, heat the olive oil and butter together over medium high heat. Add the diced onion. Cook for 5 minutes until the onion becomes soft
                <br>
                </br>
                2.add the diced carrots and celery. Season with dried thyme and garlic powder. Allow to cook for an additional 5 minutes.
                <br>
                </br>
                3. nto the pot, pour the chicken broth and the broccoli florets. Bring to a boil and allow the broccoli to cook for 15 minutes, until tender. Season with salt and pepper to taste.
                <br>
                </br>
                4. For the dumplings, in a medium bowl, whisk together the flour, baking powder, parmesan salt, garlic powder and dried sage.
                <br>
                </br>
                5. While the soup is boiling, drop 1 heaping tablespoon of the dumpling mixture into the soup, about 6-8 dumplings at a time. They may sink initially, but will rise as they cook. Cook the dumplings for about 10 minutes.
                <br>
                </br>
                6. add the heavy cream and cheddar cheese
            </List>)}
            {name === boxingTraining && (<List>
                Steps
                <br>
                </br>
                1. Warm-up (5-10 minutes): Start with light jogging or jump rope, followed by dynamic stretches.
                <br>
                </br>
                2.Shadowboxing (5-10 minutes): Practice punches, footwork, and defensive moves in front of a mirror or open space.
                <br>
                </br>
                3. Heavy Bag Work (10-15 minutes): Punch the heavy bag using proper form, focusing on combinations, footwork, and power.
                <br>
                </br>
                4. Pad Work (10-15 minutes): Partner up and practice combinations and drills with a focus pad holder.
                <br>
                </br>
                5. Conditioning (10-15 minutes): Incorporate high-intensity conditioning exercises like burpees and sprints to improve endurance.
                6Cool-down (5-10 minutes): Finish with static stretches for major muscle groups and take deep breaths to relax.
            </List>)}
            {name === hiitWorkout && (<List>
                Here is a high-intensity interval training (HIIT) workout that you can complete in just 20 minutes:
                <br>
                </br>
                Warm-up (3-5 minutes):
                <br>
                </br>
                HIIT Circuit (15 minutes):
                <br>
                </br>
                1. Set a timer for 15 minutes and perform the following exercises in a circuit, with little to no rest between exercises.
                <br>
                </br>
                2.Each exercise should be performed at maximum effort for 30 seconds, followed by a 10-second rest before moving on to the next exercise.
                <br>
                </br>
                3.Each exercise should be performed at maximum effort for 30 seconds, followed by a 10-second rest before moving on to the next exercise.
                <br>
                </br>
                * Burpees: Start in a standing position, drop into a squat, kick your feet back into a plank position, perform a push-up, jump your feet back to a squat, and then jump explosively into the air with your arms extended overhead.
                <br>
                </br>
                * Mountain Climbers: Start in a plank position with your hands on the ground, and alternate driving your knees towards your chest as if you are climbing a mountain, keeping your core engaged.
                <br>
                </br>
                * Bicycle Crunches: Lie on your back with your hands behind your head, and perform a crunch while bringing your opposite elbow towards the opposite knee, alternating sides in a bicycle pedal motion.
                <br>
                </br>
                * High Knees: Stand in place and jog while bringing your knees up towards your chest as high as you can, alternating legs, while pumping your arms.
                <br>
                </br>
                Cool-Down
                1. Do some static stretches for major muscle groups like your legs, arms, back, and shoulders, holding each stretch for 15-30 seconds.
                <br>
                </br>
                2. Take deep breaths and relax your body to aid in recovery.
                <br>
                </br>
                *** Remember to listen to your body, modify the exercises if needed, and stay hydrated throughout the workout. HIIT workouts can be intense, so be sure to warm up properly and cool down afterwards to take care of your body. Enjoy your quick and effective 20-minute HIIT workout! ***
            </List>)}
        </Header>
    )
}

const HealthArticles = ({ setActiveModal }) => {
    return (

        <Grid style={{ width: '150%', height: '100%' }} columns={3}>
            <Grid.Column>
                <PageCard
                    title={improveSleep}
                    imageSrc={sleepImage}
                    button={<ArticleButton onClick={() => setActiveModal(improveSleep)}/>}
                />
            </Grid.Column>
            <Grid.Column>
                <PageCard
                    title={howMuchWater}
                    imageSrc={waterImage}
                    button={<ArticleButton onClick={() => setActiveModal(howMuchWater)}/>}
                />
            </Grid.Column>
            <Grid.Column>
                <PageCard
                    title={meditationBenefits}
                    imageSrc={meditationImage}
                    button={<ArticleButton onClick={() => setActiveModal(meditationBenefits)}/>}
                />
            </Grid.Column>
        </Grid>
    )
}
const Recipes = ({ setActiveModal }) => {
    return (
        <Grid style={{ width: '150%', height: '100%' }} columns={3}>
            <Grid.Column>
                <PageCard
                    title={buffChickSan}
                    imageSrc={buffChickImage}
                    button={<ArticleButton onClick={() => setActiveModal(buffChickSan)}/>}
                />
            </Grid.Column>
            <Grid.Column>
                <PageCard
                    title={brocChedSoup}
                    imageSrc={dumplingImage}
                    button={<ArticleButton onClick={() => setActiveModal(brocChedSoup)}/>}
                />
            </Grid.Column>
            <Grid.Column>
                <PageCard
                    title={chickpeaStir}
                    imageSrc={chickpeaImage}
                    button={<ArticleButton onClick={() => setActiveModal(chickpeaStir)}/>}
                />
            </Grid.Column>
        </Grid>
    )
}
const Workouts = ({ setActiveModal }) => {
    return (
        <Grid style={{ width: '150%', height: '100%' }} columns={3}>
            <Grid.Column>
                <PageCard
                    title={boxingTraining}
                    imageSrc={boxingImage}
                    button={<ArticleButton onClick={() => setActiveModal(boxingTraining)}/>}
                />
            </Grid.Column>
            <Grid.Column>
                <PageCard
                    title={hiitWorkout}
                    imageSrc={hiitImage}
                    button={<ArticleButton onClick={() => setActiveModal(hiitWorkout)}/>}
                />
            </Grid.Column>
            <Grid.Column>
                <PageCard
                    title={yoga}
                    imageSrc={yogaImage}
                    button={<ArticleButton onClick={() => setActiveModal(yoga)}/>}
                />
            </Grid.Column>
        </Grid>
    )
}

const Learn = () => {
    const [activeModal, setActiveModal] = useState('')
    const [modalContent, setModalContent] = useState('')

    useEffect(() => {
        setModalContent(
            (activeModal !== '' &&
            <PageModal
                content={<Article name={activeModal} content={articleText[activeModal]}/>}
                title={activeModal}
                open={true}
                setClosed={() => setActiveModal('')}
                submitText={'Done'}
                submitAction={() => setActiveModal('')}/>) ||
            ''
        )
    }, [activeModal])

    return (
        <div>
            <Header size='large'>Learn</Header>
            {modalContent}
            <PageItem title="Health Articles" moreLabel="View More" content={<HealthArticles setActiveModal={setActiveModal}/>}/>
            <PageItem title="Recipes" moreLabel="View More" content={<Recipes setActiveModal={setActiveModal}/>}/>
            <PageItem title="Workouts" moreLabel="View More" content={<Workouts setActiveModal={setActiveModal}/>}/>
        </div>
    )
}

export default Learn
