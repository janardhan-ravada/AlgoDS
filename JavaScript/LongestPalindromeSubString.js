let LPS = (str, i, j, memo={})=> {
	let key = i+","+j;
	if(key in memo){
		return memo[key];
	}

	if(i===j) return str[i];

	let tempi =i; 
	let tempj = j;

	while(tempi < tempj && str[tempi] === str[tempj]){
		tempi++;
		tempj--;

		if(tempi>=tempj){
			memo[key] = str.slice(i,j+1);
			return str.slice(i,j+1);
		}
	}

	let p1 = LPS(str, i+1, j, memo);
	let p2 = LPS(str, i, j-1, memo);
	if(p1.length > p2.length){
		memo[key] =p1;
		return p1;
	} else {
		memo[key] =p2;
		return p2;
	}
}

var longestPalindrome = function(s) {
    return LPS(s, 0, s.length-1);
};


var LPSwithTabulation = (str) => {
	let length = str.length;

	let table = new Array(length).fill(0);

	table = table.map(row=> new Array(length).fill(0));

	let largestPalindrome;
	for(let i=0; i<length; i++){
		table[i][i] = 1;
		largestPalindrome = str[i];
	}

	let len=2;
	for(let itr=0; itr<length;itr++){
		let i=0;
		let j=i+len-1;
		while(i<length && j<length){
			if(str[i] === str[j] && (j-i ===1 || table[i+1][j-1] === 1)){
				table[i][j] = 1;
				largestPalindrome= str.slice(i, j+1);
			}
			i++;
			j++;
		}
		len++;
	}

	//console.log(table);
	return largestPalindrome;

}

console.log(LPSwithTabulation("fabccbae"));

//console.log(longestPalindrome("vaomxdtiuwqlwhgutkhxxhccsgvyoaccuicgybnqnslogtqhblegfudagpxfvjdacsxgevvepuwthdtybgflsxjdmmfumyqgpxatvdypjmlapccaxwkuxkilqqgpihyepkilhlfkdrbsefinitdcaghqmhylnixidrygdnzmgubeybczjceiybowglkywrpkfcwpsjbkcpnvfbxnpuqzhotzspgebptnhwevbkcueyzecdrjpbpxemagnwmtwikmkpqluwmvyswvxghajknjxfazshsvjkstkezdlbnkwxawlwkqnxghjzyigkvqpapvsntojnxlmtywdrommoltpbvxwqyijpkirvndwpgufgjelqvwffpuycqfwenhzrbzbdtupyutgccdjyvhptnuhxdwbmdcbpfvxvtfryszhaakwshrjseonfvjrrdefyxefqfvadlwmedpvnozobftnnsutegrtxhwitrwdpfienhdbvvykoynrsbpmzjtotjxbvemgoxreiveakmmbbvbmfbbnyfxwrueswdlxvuelbkrdxlutyukppkzjnmfmclqpkwzyylwlzsvriwomchzzqwqglpflaepoxcnnewzstvegyaowwhgvcwjhbbstvzhhvghigoazbjiikglbqlxlccrwqvyqxpbtpoqjliziwmdkzfsrqtqdkeniulsavsfqsjwnvpprvczcujihoqeanobhlsvbzmgflhykndfydbxatskf"));

console.log(LPSwithTabulation("vaomxdtiuwqlwhgutkhxxhccsgvyoaccuicgybnqnslogtqhblegfudagpxfvjdacsxgevvepuwthdtybgflsxjdmmfumyqgpxatvdypjmlapccaxwkuxkilqqgpihyepkilhlfkdrbsefinitdcaghqmhylnixidrygdnzmgubeybczjceiybowglkywrpkfcwpsjbkcpnvfbxnpuqzhotzspgebptnhwevbkcueyzecdrjpbpxemagnwmtwikmkpqluwmvyswvxghajknjxfazshsvjkstkezdlbnkwxawlwkqnxghjzyigkvqpapvsntojnxlmtywdrommoltpbvxwqyijpkirvndwpgufgjelqvwffpuycqfwenhzrbzbdtupyutgccdjyvhptnuhxdwbmdcbpfvxvtfryszhaakwshrjseonfvjrrdefyxefqfvadlwmedpvnozobftnnsutegrtxhwitrwdpfienhdbvvykoynrsbpmzjtotjxbvemgoxreiveakmmbbvbmfbbnyfxwrueswdlxvuelbkrdxlutyukppkzjnmfmclqpkwzyylwlzsvriwomchzzqwqglpflaepoxcnnewzstvegyaowwhgvcwjhbbstvzhhvghigoazbjiikglbqlxlccrwqvyqxpbtpoqjliziwmdkzfsrqtqdkeniulsavsfqsjwnvpprvczcujihoqeanobhlsvbzmgflhykndfydbxatskf"));