import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { SlotComponent } from "./slots/slot.component";

@NgModule({
    declarations: [AppComponent, SlotComponent],
    imports: [
        BrowserModule,
        FormsModule
    ],
    bootstrap: [AppComponent]    
})

export class AppModule {}