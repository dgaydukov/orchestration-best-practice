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

    async create(load: Note){
        const item = await this.repo.create(load);
        return this.repo.save(item);
    }

    async update(id: string, load: Note){
        const item = await this.repo.findOne(id);
        if(!item){
            throw new Error(`Note with id: ${id} hasn't been found`);
        }
        const updated = await this.repo.merge(item, load);
        return this.repo.save(updated);
    }

    async delete(id: string){
        await this.repo.delete(id);
        return {id};
    }
}