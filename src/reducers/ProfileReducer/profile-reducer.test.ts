import {
    addPostAC, changeStatusAC,
    profileReducer,
    ProfileStateType,
    ProfileType,
    setStatusAC,
    setUserProfileAC
} from './profile-reducer';
import {v1} from 'uuid';


let startState: ProfileStateType;

beforeEach(() => {
    startState = {
        posts: [
            {id: v1(), message: 'Hi', likeCounts: 25},
            {id: v1(), message: 'Hello', likeCounts: 20},
        ],
        newPostText: '',
        profile: null,
        status: '',
    }
})

test('post should be added', () => {
    let endState = profileReducer(startState,addPostAC('new post') )

    expect(endState.posts[0].message).toBe('new post')
    expect(endState.posts[0].id).toBeDefined()
    expect(endState.posts[0].likeCounts).toBe(0)
})

test('data user should be update', () => {
    const profile : ProfileType  = {
        aboutMe: 'I am Alex',
        contacts: {
            facebook: 'facebook',
            website: 'null',
            vk: 'vk',
            twitter: 'twitter',
            instagram: 'instagram',
            youtube: 'null',
            github: 'github',
            mainLink: 'null'
        },
        lookingForAJob: true,
        lookingForAJobDescription: 'I am frontend',
        fullName: 'Aleksei',
        userId: 2,
        photos: {
            small: 'string',
            large: 'string'
        }
    }

    let endState = profileReducer(startState,setUserProfileAC(profile) )
    expect(endState.profile?.contacts.facebook).toBe('facebook')
})

test('a status should be added', () => {
    let endState = profileReducer(startState,setStatusAC('Hello Dimych') )

    expect(endState.status).toBe('Hello Dimych')
})

test('status should be changed', () => {
    let endState = profileReducer(startState,changeStatusAC('new status'))

    expect(endState.status).toBe('new status')
})