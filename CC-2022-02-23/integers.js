/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

function findTarget(nums, target) {
	//outer loop grabbing a num.
	for (let i = 0; i < nums.length; i++) {
		//inner loop testing that num with other nums.
		for (let j = 0; j < nums.length; j++) {
			if (nums[i] + nums[j] === target && i !== j) {
				return [i, j];