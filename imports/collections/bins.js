import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

Meteor.methods({
	'bins.insert':
});

export const Bins = new Mongo.Collection('bins');