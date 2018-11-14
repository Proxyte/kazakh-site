import { PipeTransform, Pipe } from "@angular/core";

@Pipe({ name: 'clearSpace' })
export class ClearSpacePipe implements PipeTransform {
    transform(value) {
        return value.replace(" ", "_");
    }
}