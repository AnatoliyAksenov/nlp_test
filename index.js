var natural = require('natural'),
    TfIdf = natural.TfIdf,
    tfidf = new TfIdf();

var classes = [];
classes.push('auto');
classes.push('economics_business');
classes.push('entertainment');
classes.push('family');
classes.push('fashion');
classes.push('games');
classes.push('health');
classes.push('politics');
classes.push('realty');
classes.push('science_hitech');
classes.push('sport');
classes.push('travel');
classes.push('cook');

tfidf.addFileSync('data/01_auto.txt');
tfidf.addFileSync('data/02_economics_business.txt');
tfidf.addFileSync('data/03_entertainment.txt');
tfidf.addFileSync('data/04_family.txt');
tfidf.addFileSync('data/05_fashion.txt');
tfidf.addFileSync('data/06_games.txt');
tfidf.addFileSync('data/07_health.txt');
tfidf.addFileSync('data/08_politics.txt');
tfidf.addFileSync('data/09_realty.txt');
tfidf.addFileSync('data/10_science_hitech.txt');
tfidf.addFileSync('data/11_sport.txt');
tfidf.addFileSync('data/12_travel.txt');
tfidf.addFileSync('data/13_cook.txt');

tfidf.tfidfs('социальные выплаты', function(i, measure){
    console.log(`file ${classes[i]}: ${measure}`);
});