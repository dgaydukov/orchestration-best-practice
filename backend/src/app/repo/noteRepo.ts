import { getRepository, Repository } from 'typeorm';
import Note from '../../entity/note';

export default class NoteRepo {

    private repo: Repository<Note>;

    constructor(){
        this.repo = getRepository(Note);
    }

    async getAll(){
        return this.repo.find();
    }

    async getById(id: string){
        return this.repo.findOne(id);
    }

    async insert(body: any){
        return this.repo.findOne(id);
    }

    async update(id: string, body){
        return this.repo.findOne(id);
    }

    async delete(id: string){
        await this.repo.delete(id);
        return {id};
    }
}