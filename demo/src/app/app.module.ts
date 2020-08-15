import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
import { HelloComponent } from './hello/hello.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  declarations: [
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule
  ],
  providers: [],
  bootstrap: [SkillsComponent]
})
export class AppModule { }
