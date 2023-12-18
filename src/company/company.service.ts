import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from './entities/company.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private readonly companyRepo: Repository<Company>,
  ) {}

  async create(createCompanyDto: CreateCompanyDto) {
    return await this.companyRepo.save(createCompanyDto);
  }

  async findAll() {
    return await this.companyRepo.find();
  }

  async findOne(id: number) {
    return await this.companyRepo.findOneBy({ id });
  }

  async update(id: number, updateCompanyDto: UpdateCompanyDto) {
    const comapany = await this.findOne(id);
    if (comapany) {
      const { companyName, isActive } = updateCompanyDto;
      comapany.companyName = companyName || comapany.companyName;
      comapany.isActive = isActive || comapany.isActive;

      await this.companyRepo.save(comapany);
    }
    return comapany;
  }

  async remove(id: number) {
    return await this.companyRepo.delete(id);
  }
}
