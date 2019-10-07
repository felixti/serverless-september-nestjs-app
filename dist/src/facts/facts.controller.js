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
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const catFacts = [
    "Cats have supersonic hearing",
    "On average, cats spend 2/3 of every day sleeping. That means a nine-year-old cat has been awake for only three years of its life.",
    "A cat uses its whiskers for measuring distances. The whiskers of a cat are capable of registering very small changes in air pressure.",
    "A healthy cat has a temperature between 38 and 39 degrees Celcius.",
    "A cat’s jaw can’t move sideways, so a cat can’t chew large chunks of food.", "Jaguars are the only big cats that don't roar.",
    "Cats have 'nine lives' thanks to a flexible spine and powerful leg and back muscles",
    "The cat's tail is used to maintain balance.",
    "The technical term for a cat’s hairball is a 'bezoar.'",
    "The first cat show was organized in 1871 in London. Cat shows later became a worldwide craze.",
    "A happy cat holds her tail high and steady.",
    "A cat can jump 5 times as high as it is tall."
];
let FactsController = class FactsController {
    getRandomFact() {
        return catFacts[Math.floor(Math.random() * catFacts.length)];
    }
};
__decorate([
    common_1.Get('random'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], FactsController.prototype, "getRandomFact", null);
FactsController = __decorate([
    common_1.Controller('facts')
], FactsController);
exports.FactsController = FactsController;
//# sourceMappingURL=facts.controller.js.map