"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var hero_detail_component_1 = require('./hero-detail.component');
var hero_service_1 = require('./hero.service');
var HeroesComponent = (function () {
    /**
     * Constructor
     */
    function HeroesComponent(heroService) {
        this.heroService = heroService;
        this.title = 'Tour of Heroes';
    }
    /**
     *
     */
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroesSlowly().then(function (heroes) { return _this.heroes = heroes; });
    };
    /**
     *
     */
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    /**
     * Metodo que se ejecuta cuando seleccionamos un <Li> de la lista
     */
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    HeroesComponent = __decorate([
        core_1.Component({
            selector: 'my-heroes',
            template: "\n  <h2>My Heroes</h2>\n  <my-hero-detail [hero]=\"selectedHero\"></my-hero-detail>\n  <ul class=\"heroes\">\n    <li *ngFor=\"let hero of heroes\" (click)=\"onSelect(hero)\">\n      <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n    </li>\n  </ul>\n  ",
            directives: [hero_detail_component_1.HeroDetailComponent]
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService])
    ], HeroesComponent);
    return HeroesComponent;
}());
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes.component.js.map