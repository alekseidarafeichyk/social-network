import React from 'react';
import {create} from 'react-test-renderer';
import {ProfileStatus} from './ProfileStatus';

describe('ProfileStatus component', () => {
    test('status from props should be in the state', () => {
        const component = create(<ProfileStatus status={'lesha'} changeUserStatus={(newStatus) => {
        }}/>);
        const instance: any = component.getInstance();
        expect(instance.state.status).toBe('lesha');
    });
    test('after creation span should be displayed', () => {
        const component = create(<ProfileStatus status={'lesha'} changeUserStatus={(newStatus) => {
        }}/>);
        const root: any = component.root;
        let span = root.findByType('span')
        expect(span.length).not.toBeNull();
    });
    test('after creation span should contains correct status', () => {
        const component = create(<ProfileStatus status={'lesha'} changeUserStatus={(newStatus) => {
        }}/>);
        const root: any = component.root;
        let span = root.findByType('span')
        expect(span.children[0]).toBe('lesha');
    });
    test('after creation input should be dispalyed', () => {
        const component = create(<ProfileStatus status={'lesha'} changeUserStatus={(newStatus) => {
        }}/>);
        const root: any = component.root;
        expect(()=> {
            root.findByType('input')
        }).toThrow();
    });
    test('input should be displayed in editMode instead of span', () => {
        const component = create(<ProfileStatus status={'lesha'} changeUserStatus={(newStatus) => {
        }}/>);
        const root: any = component.root;
        let span = root.findByType('span');
        span.props.onDoubleClick();
        let input = root.findByType('input');
        expect(input.props.value).toBe('lesha')
    });
});