import { describe, it, expect } from 'vitest'
import { events } from '../src/constants.js'

describe('Important constants', () => {
    it('should have correct events', () => {
        expect(Object.values(events)).toHaveLength(21)
        expect(events.addLabel).toEqual('allure:addLabel')
        expect(events.addLink).toEqual('allure:addLink')
        expect(events.addFeature).toEqual('allure:addFeature')
        expect(events.addStory).toEqual('allure:addStory')
        expect(events.addEpic).toEqual('allure:addEpic')
        expect(events.addSuite).toEqual('allure:addSuite')
        expect(events.addSubSuite).toEqual('allure:addSubSuite')
        expect(events.addParentSuite).toEqual('allure:addParentSuite')
        expect(events.addOwner).toEqual('allure:addOwner')
        expect(events.addSeverity).toEqual('allure:addSeverity')
        expect(events.addTag).toEqual('allure:addTag')
        expect(events.addIssue).toEqual('allure:addIssue')
        expect(events.addAllureId).toEqual('allure:addAllureId')
        expect(events.addTestId).toEqual('allure:addTestId')
        expect(events.addDescription).toEqual('allure:addDescription')
        expect(events.addAttachment).toEqual('allure:addAttachment')
        expect(events.startStep).toEqual('allure:startStep')
        expect(events.endStep).toEqual('allure:endStep')
        expect(events.addStep).toEqual('allure:addStep')
        expect(events.addArgument).toEqual('allure:addArgument')
        expect(events.addAllureStep).toEqual('allure:addAllureStep')
    })
})
