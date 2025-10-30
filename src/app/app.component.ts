import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataserviceService } from './dataservice.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  task= '';
  tasks: any[] = [];

  constructor(private dataService: DataserviceService) {}
ngOnInit(){
  this.loadTasks();
}
  loadTasks() {
    
    this.dataService.getTasks().subscribe(res => {
      this.tasks = res;
    });
  }

  addTask() {
    if (!this.task.trim()) {
      alert('Please enter a task');
      return;
    }
   
    this.dataService.addTask(this.task).subscribe((newTask) => {
      this.tasks.unshift(newTask) // add task on top
      this.task = '';
      
    });
  }

  deleteTask(item: any) {
    this.dataService.deleteTask(item._id).subscribe(() => {
      this.tasks = this.tasks.filter(t => t._id !== item._id);
    });
  }
}
