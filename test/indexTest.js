describe('index.js', function () {
  describe('cats', function () {
    it('is assigned an initial value of ["Milo", "Otis", "Garfield"]', function () {
      expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
    });
  });

  describe('Array functions', function () {
    beforeEach(() => {
      cats.length = 0;

      cats.push['Milo', 'Otis', 'Garfield'];
    });
    });

    
    describe('destructivelyAppendCat(name)',  () => {
      it('appends a cat to the end of the cats array', ()=>{
        destructivelyAppendCat('Ralph');

        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield", "Ralph"]);
      });
    });
    describe('destructivelyAppendCat(name)', ()=>{
      it('appends a cat to the end of the cats array', ()=> {
        const cats = ['Milo', 'Otis', 'Garfield'];
        cats.push('Ralph');
      });
    });

    describe('destructivelyPrependCat(name)', ()=> {
      it('prepends a cat to the beginning of the cats array', ()=> {
        destructivelyPrependCat("Bob");

        expect(cats).to.have.ordered.members(["Bob", "Milo", "Otis", "Garfield"]);
      });
    });
    describe('destructivelyPrependCat(name)',() => {
    it('prepends a cat to the beggining of the cats array', ()=>{
      const cats =['Milo','Otis','Garfield'];
      cats =['Bob', ...cats];
    });
    });

    describe('destructivelyRemoveLastCat()', ()=> {
      it('removes the last cat from the cats array',  () =>{
        destructivelyRemoveLastCat();

        expect(cats).to.have.ordered.members(["Milo", "Otis"]).and.to.not.include('Garfield');
      });
    });
    describe('destructivelyRemoveLastCat()', ()=> {
      it('removes the last cat from the cats array',  () =>{
      const cats=['Milo', 'Otis', 'Garfield'];
      cats.pop();
      });
    });

    describe('destructivelyRemoveFirstCat()',  ()=> {
      it('removes the first cat from the cats array',  ()=> {
        destructivelyRemoveFirstCat();

        expect(cats).to.have.ordered.members(["Otis", "Garfield"]).and.to.not.include('Milo');
      });
    });
    function destructivelyRemoveFirstCat(){
      const firstcat=cats.shift();
       return cats;
}

    describe('appendCat(name)', function () {
      it('appends a cat to the cats array and returns a new array, leaving the cats array unchanged', function () {
        expect(appendCat("Broom")).to.have.ordered.members(["Milo", "Otis", "Garfield", "Broom"]);

        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });
    function appendCat(name){
      return[...cats,'Broom'];
    }

    describe('prependCat(name)', function () {
      it('prepends a cat to the cats array and returns a new array, leaving the cats array unchanged', function () {
        expect(prependCat("Arnold")).to.have.ordered.members(["Arnold", "Milo", "Otis", "Garfield"]);

        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });

const cats=["Milo", "Otis", "Garfield"]
const prependCat=(name)=>[name,...cats];
const newCats=prepedentCat('Arnold');

    describe('removeLastCat()', function () {
      it('removes the last cat in the cats array and returns a new array, leaving the cats array unchanged', function () {
        expect(removeLastCat()).to.have.ordered.members(["Milo", "Otis"]);

        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });
    
  function removeLastCat() {
    return this.slice(0,-1);
  }

   describe('removeFirstCat()', function () {
    it('removes the first cat from the cats array and returns a new array, leaving the cats array unchanged', function () {
      expect(removeFirstCat()).to.have.ordered.members(["Otis", "Garfield"]);

      expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
    });
  });
});

function removeFirstCat(){
  return this.slice (1);
}



